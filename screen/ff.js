function FlightFactor() {

    var self = this;
    this.Request = null;
    this.FirstRequest = null;
    this.LastRequest = null;

    var last = function(request, prev) {
        if (request == null) {
        return null;
        }
        if (request.next == null) {
        if (prev != undefined) {
            prev.next = null;
        }
        return request;
        } else {
        return last(request.next, request);
        }
    };

    this.SocketValid = false;
    this.Socket = new WebSocket('ws://127.0.0.1:6025', 'json');
    
    this.Socket.onopen = function() {

        //console.log('Socket connected');

        self.SocketValid = true;

        if (self.FirstRequest != null && self.FirstRequest.next == null) {
        self.LastRequest = self.FirstRequest;
        self.FirstRequest = null;
        } else {
        self.LastRequest = last(self.FirstRequest);
        }

        if (self.LastRequest != null) {
        self.Request = self.LastRequest;
        if (self.Request.type == 0) { // GET
            self.Socket.send('GET ' + self.Request.path);
        }
        if (self.Request.type == 1) { // SET
            self.Socket.send('SET ' + self.Request.path + ' ' + self.Request.value);
        }
        if (self.Request.type == 2) { // DSC
            self.Socket.send('DSC ' + self.Request.path);
        }
        }
    };
    this.Socket.onclose = function(event) {
        console.log('Socket closed' + event);
        self.SocketValid = false;
        self.SocketReady = false;
        self.Socket = new WebSocket('ws://' + host, 'json');
    };
    this.Socket.onerror = function(event) {
        console.log('Socket error' + event);
    };
    this.Socket.onmessage = function(event) {

        if (self.Request.type == 0) { // GET

        self.Request.result(JSON.parse(event.data));
        }
        if (self.Request.type == 1) { // SET

        if (event.data != 'OK') console.log('Request ' + event.data);
        }
        if (self.Request.type == 2) { // DSC

        self.Request.result(JSON.parse(event.data));
        }

        if (self.FirstRequest != null && self.FirstRequest.next == null) {
        self.LastRequest = self.FirstRequest;
        self.FirstRequest = null;
        } else {
        self.LastRequest = last(self.FirstRequest);
        }

        if (self.LastRequest != null) {
        self.Request = self.LastRequest;
        if (self.Request.type == 0) { // GET
            self.Socket.send('GET ' + self.Request.path);
        }
        if (self.Request.type == 1) { // SET
            self.Socket.send('SET ' + self.Request.path + ' ' + self.Request.value);
        }
        if (self.Request.type == 2) { // DSC
            self.Socket.send('DSC ' + self.Request.path);
        }
        } else {
        self.Request = null;
        }

    };

    function RequestGet(path, result) {

        this.type = 0;
        this.path = path;
        this.result = result;
    }

    function RequestSet(path, value) {

        this.type = 1;
        this.path = path;
        this.value = value;
    }

    function RequestDesc(path, result) {

        this.type = 2;
        this.path = path;
        this.result = result;
    }

    this.Get = function(path, result) {
        var request = new RequestGet(path, result);
        if ((self.SocketValid == true) && (self.Request == null)) {
        self.Socket.send('GET ' + request.path);
        self.Request = request;
        } else {
        request.next = self.FirstRequest;
        self.FirstRequest = request;
        }
    };
    this.Set = function(path, value) {
        var request = new RequestSet(path, value);
        if ((self.SocketValid == true) && (self.Request == null)) {
        self.Socket.send('SET ' + request.path + ' ' + request.value);
        self.Request = request;
        } else {
        request.next = self.FirstRequest;
        self.FirstRequest = request;
        }
    };

    //noinspection JSUnusedGlobalSymbols
    this.Desc = function(path, result) {
        var request = new RequestDesc(path, result);
        if ((self.SocketValid == true) && (self.Request == null)) {
        self.Socket.send('DSC ' + request.path);
        self.Request = request;
        } else {
        request.next = self.FirstRequest;
        self.FirstRequest = request;
        }
    };
}
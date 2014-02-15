var thumbnail1 = "http://img.youtube.com/vi/";
var thumbnail2 = "/sddefault.jpg";
var title= "";
var hash_global = "";
var time = 0;
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
var notification = 0;
function comparator(msg0, msg1) {
  if (parseInt(msg0.get("secs")) < parseInt(msg1.get("secs"))) {
    return -1;
  } else if (parseInt(msg0.get("secs")) > parseInt(msg1.get("secs"))) {

    return 1;
  } else {
    return 0;
  }
}
function setHighlight(comment) {
  var result = "\"";
  var num = 0;
  while (num < comment.length && num < 50) {
    var c = comment.charAt(num);
    result += c;
    num++;
  }
    result += "...\"";
    return result;
}

$(function(){
    Parse.initialize("O6aEBZTeKKiLWt2z5urBNaS8UfiTH9qE1FtKnFIg", "EVPlbnDGSXkI2TxrUzBA09D676xBg5oUBZqKnWkB");
    Parse.$ = jQuery;
    var Reply = Parse.Object.extend('reply', {
      defaults: function() {
        return {
          username: "user",
          text: "helloWorld",
          parent: "",
          askerusername: "",
          best: false
        }
      },
      bestanswer: function() {
        if (this.get("best")) {
          this.save({best: false});
          this.trigger("isBest");
        } else {
          this.save({best: true});
          this.trigger("isBest");
        }
      }
    });

    var Replies = Parse.Collection.extend({
      model: Reply,
    });

    var ReplyView = Parse.View.extend({
      template: _.template($('#reply-template').html()),
      events: {
        "click #best-answer": "bestanswer", 
      },

      bestanswer: function() {
        if (Parse.User.current().get("username") !== this.model.get("askerusername")) {
          return false;
        }
        this.$("#check").toggleClass("checked");
        this.model.bestanswer();
      },

      render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        console.log(this.model.get("askerusername"));
        console.log(Parse.User.current().get("username"));
        if (Parse.User.current().get("username") !== this.model.get("askerusername")) {
          this.$("#best-answer").addClass("disabled");
        }
        return this;
      },

    });
    var News = Parse.Object.extend('news', {
      defaults: function() {
        return {
          user: "user",
          asker: "",
          isAnswer: false,
          content: "",
          video: "title",
          video_hash: "hash",
          seconds: 0,
        };
      },
      initialize: function() {
      },
    });

    var NewsList = Parse.Collection.extend({
      model: News,
    });

    var Notif = Parse.Object.extend("notification", {
      initialize: function() {
      }
    })

    var Notifs = Parse.Collection.extend({
      model: Notif,
    });

    var ColNews = new NewsList;

    var Message = Parse.Object.extend("message", {

        defaults: function() {
            return {
                comment: "empty...",
                time: "0",
                secs: "0",
                upvotes: 0,
                downvotes: 0,
                user: "user",
                id2: "",
                replying: false,
                showMore: true,
                reply: null,
                repliesCollect: null,
                hash: "",
                isQuestion: false,
                hasVotedUp: [],
                hasVotedDown: [],
            };
        },

        replies: null,

        initialize: function() {
          this.replies = new Replies;
          this.fetchReplies();
        },

        fetchReplies: function() {
          var self = this;
          this.replies.query = new Parse.Query(Reply);
          this.replies.query.equalTo("parent", this.id);
          this.replies.fetch({
            success: function() {
              self.trigger("replies-added");
            }
          });
        },
        
        reply: function() {
            this.save({"replying":true});
        },
        
        unReply: function() {
            this.save({"replying":false});
        },
        
        showMore: function() {
            if (this.get("showMore")) {
                this.save({"showMore": false});
            } else {
                this.save({"showMore": true});
            }
        },
        
        voteUpOne: function() {
            var id2 = Parse.User.current().get("email");
            if (this.get("hasVotedUp").indexOf(id2) == -1) {
              if (this.get("hasVotedDown").indexOf(id2) != -1) {
                var dVotes = this.get("hasVotedDown");
                this.save({downvotes: this.get('downvotes') + 1});
                dVotes.splice(dVotes.indexOf(id2), 1);
                this.save({hasVotedDown: dVotes});
              }
              this.save({hasVotedUp: this.get("hasVotedUp").concat(id2)});
              this.save({upvotes: this.get('upvotes') + 1});
            } else {
              this.get("hasVotedUp").splice(this.get("hasVotedUp").indexOf(id2), 1);
              this.save({hasVotedUp: this.get("hasVotedUp")});
              this.save({upvotes: this.get('upvotes') - 1});
            }
        },

        voteDownOne: function() {
            var id2 = Parse.User.current().get("email");
            if (this.get("hasVotedDown").indexOf(id2) == -1) {
                if (this.get("hasVotedUp").indexOf(id2) != -1) {
                  var dVotes = this.get("hasVotedUp");
                  this.save({upvotes: this.get('upvotes') - 1});
                  dVotes.splice(dVotes.indexOf(id2), 1)
                  this.save({hasVotedUp: dVotes});
                }
              this.save({hasVotedDown: this.get("hasVotedDown").concat(id2)});
              this.save({downvotes: this.get('downvotes') - 1});
            } else {
              this.get("hasVotedDown").splice(this.get("hasVotedDown").indexOf(id2), 1);
              this.save({hasVotedDown: this.get("hasVotedDown")});
              this.save({downvotes: this.get('downvotes') + 1});

            }
        },
        
        addReply: function(txt){
            if(txt === '' || txt === null ){
                return;
            }
            var first = Parse.User.current().get("first_name")
            var name = first + " " + Parse.User.current().get("last_name");
            console.log(this.id);
            this.replies.create({
                  text: txt,
                  username: name,
                  parent: this.id,
                  askerusername: this.get("id2"),
                  best: false,
            });
           this.save();
            if (this.get("isQuestion")) {
              ColNews.create({
                asker: this.get("id2"),
                user: name,
                video: title,
                video_hash: hash_global,
                isAnswer: true,
                content: setHighlight(txt),
                seconds: parseInt(this.get("secs")),
              });
              var user = new Notifs
              user.create({email: this.get("id2")});
            }
        }
    });

    var Video = Parse.Object.extend('ytVideo', {
      defaults: function() {
        return {
          hash: "",
          highlights: "1. The introduction of to cs61c. The Six Great Ideas of Computer Scrience. Discusses the usage of iClickers",
          title: "",
          thumbnail:""
        };
      },

      initialize: function(hash) {
        this.set({"hash": hash});
        this.set({"thumbnail": thumbnail1 + hash + thumbnail2});
      },
    });


    var VideoList = Parse.Collection.extend({
      model: Video,
      comparator: function(msg0, msg1) {

          if (msg0.get("lecture") < msg1.get("lecture")) {
           return -1;
          } else if (msg0.get("lecture") > msg1.get("lecture")) {
           return 1;
          } else {
           return 0;
         }
      }
    });

     var NewsView = Parse.View.extend({
       template: _.template($("#news-template").html()),
       events: {
          "click #news-link": "createVideo"
       },
       initialize: function() {
       },
       render: function() {
         this.$el.html(this.template(this.model.toJSON()));
        return this;
       },
       createVideo: function() {
          new PlayerView(this.model.get("video_hash"), this.model.get("video"), this.model.get("seconds") - 2);
          this.undelegateEvents();
          delete this;
       }
     });

    var VideoView = Parse.View.extend({
      template: _.template($('#result-template').html()),
      events: {
        "click #test": "test"
      },
      initialize: function(opts) {
            //this.listenTo(this.model.get('replies'), 'add', this.addReply);
            this.model.on('change', this.render, this);
      },
      test: function() {
        new PlayerView(this.model.get("hash"), this.model.get("title"));
        this.undelegateEvents();
        delete this;
      },
      render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      }
    });
    var MessageList = Parse.Collection.extend({
        model: Message,

        nextOrder: function() {
            if (!this.length) return 1;
            return this.last().get('order') + 1;
        },
        comparator: function(msg0, msg1) {
            if (parseInt(msg0.get("secs")) < parseInt(msg1.get("secs"))) {
              return -1;
            } else if (parseInt(msg0.get("secs")) > parseInt(msg1.get("secs"))) {
              return 1;
            } else {
              return 0;
            }
        }

    });


    var MessageView = Parse.View.extend({

        className: 'chat-message',

        template: _.template($('#message-template').html()),

        initialize: function(opts) {
            this.model.on('change', this.render, this);
            this.model.on('replies-added', this.renderReplies, this);
            this.model.replies.on('add', this.renderReply, this);
        },
        
        events: {
            "click .fa-arrow-up": "voteUp",
            "click .fa-arrow-down": "voteDown",
            "click .reply": "reply",
            "click .sendReply" : "addReply",  
            "click .review": "reviewPlayer",
            "click .unReply": "reply",
            "click .showMore": "showMore"
        },
        

        addReply: function(e) {
            this.model.addReply(this.$('textarea.replyText').val());
            this.reply();

        },
        
        reply: function() {
            this.$('#reply-now').toggleClass('hidden');
            this.$('#replyText').toggleClass('hidden');
            this.$('#unReply').toggleClass('hidden');
            this.$('#sendReply').toggleClass('hidden');


        },
        
        showMore: function() {
            this.model.showMore();
            this.renderReply;
        },

        
        voteUp: function() {
            this.model.voteUpOne();
        },
        
        reviewPlayer: function() {
            
            setTime(this.model.get('time'));
        },
        
        voteDown: function() {
            this.model.voteDownOne();     
        },

        render: function() {
            // console.log(this.model.toJSON());
            this.$el.html(this.template(this.model.toJSON()));
            this.model.fetchReplies();
            if (Parse.User.current().get("username") === "userBeta@berkeley.edu") {
              $("#replyText").prop("disabled", true);
            }
            return this;
        },

        renderReplies: function() {
            this.$("#reply-list").html("");
            this.model.replies.each(function(reply) {
              var view = new ReplyView({model: reply});
              this.$("#reply-list").append(view.render().el);
            });
        },

        renderReply: function(reply) {
          var view = new ReplyView({model: reply});
          console.log(this);
          this.$("#reply-list").append(view.render().el);
          return this;
        }

    });


    var PlayerView = Parse.View.extend({
      el: $('#app'),

      template: _.template($('#player-template').html()),
      initialize: function(hash, thisTitle, start) {
            this.start = (typeof start === "undefined") ? 0 : start;
            this.hash = hash;
            hash_global = this.hash;
            time = this.start;
            title = thisTitle;
            this.title = title;
            this.$el.html(_.template($("#player-template").html()));
            this.messages = new MessageList;
            this.messages.query = new Parse.Query(Message);
            this.messages.query.equalTo('hash', hash);
            this.messages.fetch();
            this.messages.bind('reset', this.addAll);
            this.messages.bind('add', this.addOne);
            this.messages.bind('all', this.render);
            this.render();
            this.merge();
      },
      events: {
            "keyup #new-message":  "createOnEnter",
            "keydown #new-message": "renderRelevant2",
            "click #questions": "renderQ",
            "click #new-message-btn": "createOnClick",
            "click #return-home": "returnHome",
            "click #now-button": "renderRelevant",
            "click #all-button": "all",
            "click #LOL": "createOnLOL",
            "click #Gotcha": "createOnGotch",
            "click #Confusing": "createOnConfused",
            "click #heart": "createOnHeart",
            "click #exclamation": "createOnImp",
            "click #clear": "createOnClear",

      },
      createOnLOL: function(e) {
            $('#time-message').click();
            var isQ = false;
            var this_time = $('#seconds').val();
            this.messages.create({comment: "LOL",
              id2: Parse.User.current().get("email"),
              time: $('#time-message').val(),
              secs: this_time,
              hash: this.hash,
              user: Parse.User.current().get("first_name") + " " + Parse.User.current().get("last_name"),
              isQuestion: false,
            });
            $("#new-message").val('');
            var view = $("#feed")[0];
            view.scrollTop = view.scrollHeight;
      },
      createOnClear: function(e) {
            $('#time-message').click();
            var isQ = false;
            var this_time = $('#seconds').val();
            this.messages.create({comment: "Clear!",
              id2: Parse.User.current().get("email"),
              time: $('#time-message').val(),
              secs: this_time,
              hash: this.hash,
              user: Parse.User.current().get("first_name") + " " + Parse.User.current().get("last_name"),
              isQuestion: false,
            });
            $("#new-message").val('');
            var view = $("#feed")[0];
            view.scrollTop = view.scrollHeight;
      },
      createOnGotch: function(e) {
            $('#time-message').click();
            var isQ = false;
            var this_time = $('#seconds').val();
            this.messages.create({comment: "Gotcha!",
              id2: Parse.User.current().get("email"),
              time: $('#time-message').val(),
              secs: this_time,
              hash: this.hash,
              user: Parse.User.current().get("first_name") + " " + Parse.User.current().get("last_name"),
              isQuestion: false,
            });
            $("#new-message").val('');
            var view = $("#feed")[0];
            view.scrollTop = view.scrollHeight;
      },
      createOnImp: function(e) {
            $('#time-message').click();
            var isQ = false;
            var this_time = $('#seconds').val();
            this.messages.create({comment: "Important!!",
              id2: Parse.User.current().get("email"),
              time: $('#time-message').val(),
              secs: this_time,
              hash: this.hash,
              user: Parse.User.current().get("first_name") + " " + Parse.User.current().get("last_name"),
              isQuestion: false,
            });
            $("#new-message").val('');
            var view = $("#feed")[0];
            view.scrollTop = view.scrollHeight;
      },
      createOnHeart: function(e) {
            $('#time-message').click();
            var isQ = false;
            var this_time = $('#seconds').val();
            this.messages.create({comment: "<3",
              id2: Parse.User.current().get("email"),
              time: $('#time-message').val(),
              secs: this_time,
              hash: this.hash,
              user: Parse.User.current().get("first_name") + " " + Parse.User.current().get("last_name"),
              isQuestion: false,
            });
            $("#new-message").val('');
            var view = $("#feed")[0];
            view.scrollTop = view.scrollHeight;
      },
      createOnConfused: function(e) {
            $('#time-message').click();
            var isQ = false;
            var this_time = $('#seconds').val();
            this.messages.create({comment: "Confused here",
              id2: Parse.User.current().get("email"),
              time: $('#time-message').val(),
              secs: this_time,
              hash: this.hash,
              user: Parse.User.current().get("first_name") + " " + Parse.User.current().get("last_name"),
              isQuestion: false,
            });
            $("#new-message").val('');
            var view = $("#feed")[0];
            view.scrollTop = view.scrollHeight;
      },

      renderRelevant: function() {
        $("#feed").html("");
        $('#seconds').click();
        var time = parseInt($('#seconds').val());

        this.messages.each(function(message){
          if (parseInt(message.get("secs")) < (time + 30) 
            && parseInt(message.get("secs")) > (time - 30)) {
            var view = new MessageView({model: message});
            $("#feed").append(view.render().el);
          }
        });

      },

      renderQ: function() {
        $("#feed").html("");
        this.messages.each(function(message){
          if (message.get("isQuestion")) {
            var view = new MessageView({model: message});
            $("#feed").append(view.render().el);
          }
        });
      },

      renderRelevant2: function() {
        if ($("#new-message").val() !== "") { return; }
        $("#feed").html("");
        $('#seconds').click();
        var time = parseInt($('#seconds').val());
        this.messages.each(function(message){

          if (parseInt(message.get("secs")) < (time + 5) 
            && parseInt(message.get("secs")) > (time - 5)) {
            var view = new MessageView({model: message});
            $("#feed").append(view.render().el);
          }
        });

      },
      all: function() {
          $("#feed").html("");

          this.messages.each(function(message){
              var view = new MessageView({model: message});
              $("#feed").append(view.render().el);
          });
      },
      all2: function() {
          if ($("#new-message").value !== "") return;
          $("#feed").html("");
          this.messages.each(function(message){
              var view = new MessageView({model: message});
              $("#feed").append(view.render().el);
          });
      },


      addOne: function(message, collection) {
          $("#feed").html("");
          var view = new MessageView({model: message});
          $("#feed").append(view.render().el);
          var delay=1500;
          setTimeout(function(){
            $("#feed").html("");
            collection.each(function(message) {
            var view = new MessageView({model: message});
            $("#feed").append(view.render().el);
            });
          },delay)
      },

      addAll: function(collection) {
          $("#feed").html("");

          if (time === 0) {
            collection.each(function(message) {
              console.log(message);
              var view = new MessageView({model: message});
              $("#feed").append(view.render().el);
            });
          } else {
            collection.each(function(message){
              if (parseInt(message.get("secs")) < (time+ 10) 
                && parseInt(message.get("secs")) > (time - 10)) {
                  var view = new MessageView({model: message});
                  $("#feed").append(view.render().el);
              }
            });
          }
      },


      createOnEnter: function(e) {
            if (e.keyCode != 13) return;
            if ($("#new-message").val() === "") return;
            $('#time-message').click();
            var txt = $("#new-message").val();
            var isQ = false;
            var this_time = $('#seconds').val();

            if (txt.indexOf('?') !== -1) {
              isQ = true;
              ColNews.create({
                user: Parse.User.current().get("first_name") + " " + Parse.User.current().get("last_name"),
                content: setHighlight(txt),
                video: this.title,
                video_hash: this.hash,
                seconds: parseInt(this_time),
              });
            }
            this.messages.create({comment: txt,
              id2: Parse.User.current().get("email"),
              time: $('#time-message').val(),
              secs: this_time,
              hash: this.hash,
              user: Parse.User.current().get("first_name") + " " + Parse.User.current().get("last_name"),
              isQuestion: isQ,
            });
            $("#new-message").val('');
            var view = $("#feed")[0];
            view.scrollTop = view.scrollHeight;
      },


      returnHome: function() {
          new ProfileView();
          this.undelegateEvents();
          delete this;
      },

      createOnClick: function(e) {
          if ($("#new-message").val() === "") return;
          var txt = $("#new-message").val();
          $('#time-message').click();
          var isQ = false;
          var this_time = $('#seconds').val();
          if (txt.indexOf('?') !== -1) {
              isQ = true;
              ColNews.create({
                id2: Parse.User.current().get("email"),
                user: Parse.User.current().get("first_name") + " " + Parse.User.current().get("last_name"),
                content: this.setHighlight(txt),
                video: this.title,
                video_hash: this.hash,
                seconds: parseInt(this_time),
              });
          }
          this.messages.create({
              comment: this.input.val(),
              time: this.time.val(),
              secs: $('#seconds').val(),
              hash: this.hash,
              user: Parse.User.current(),
              });
          $("#new-message").val('');
          var view = this.$("#feed")[0];
          view.scrollTop = view.scrollHeight; 
      },
      merge: function() {
        var ytScript = document.createElement("script");
        var textthis =  "$(function(){\n var params = { allowScriptAccess: \"always\", allowFullScreen: \"true\" };\n var atts = { id: \"player\" };\n swfobject.embedSWF(\"http://www.youtube.com/v/"+this.hash+"?enablejsapi=1&playerapiid=ytplayer&version=3&start=" + this.start + "\",\"player\", \"700\", \"380\", \"8\", null, null, params, atts);\n});";
        ytScript.text = textthis;
        document.getElementsByTagName('BODY').item(0).appendChild(ytScript);
      },
      render: function(collection) {
        if (Parse.User.current().get("username") === "userBeta@berkeley.edu") {
            $("#LOL").prop("disabled", true);
            $("#Gotcha").prop("disabled", true);
            $("#Confusing").prop("disabled", true);
            $("#heart").prop("disabled", true);
            $("#exclamation").prop("disabled", true);
            $("#clear").prop("disabled", true);
        }
      },
    });

    var StartView = Parse.View.extend({
        el: $('#app'),
        initialize: function() {
          this.view = this.$el.html(_.template($("#start-template").html()));
        },
        events: {
          "click #sign-up-sub": "signUp",
          "click #sign-in-sub": "logIn"
        },

        logIn: function(e) {
          var self = this;

          var username = this.$("#signin-email").val();
          var password = this.$("#signin-password").val();

          Parse.User.logIn(username, password, {
            success: function(user) {
              new ProfileView();
              self.undelegateEvents();
              delete self;
            },

            error: function(user, error) {
              console.log("error");
            }
          });

          this.$(".login-form button").attr("disabled", "disabled");

          return false;
        },
        signUp: function(e) {

          if ($("#signup-email").val().match(".+@berkeley.edu")) {
            var user = new Parse.User();
            var username = $("#signup-email").val();
            var email = username;
            user.set("username", username);
            user.set("email", email);
            var password = $("#signup-password").val();
            var first_name = $("#first_name").val();
            var last_name = $("#last_name").val();
            user.set("password", password);
            user.set("first_name", first_name);
            user.set("last_name", last_name);
            user.set("notifications", 0);
            user.signUp(null, {
              success: function(user) {
                new ProfileView();
                this.undelegateEvents();
                delete this;
              },
              error: function(user, error) {
              }
            });

            return false;
          } else {
          }
        }
    });

    var ProfileView = Parse.View.extend({

        el: $('#app'),

        events: {
          "click #sign-out": "logOut",
          "click #replied2me": "renderReplies",
          "click #peoplesQ": "renderNormal",
        },
        initialize: function() {
          var email = Parse.User.current().get("email");
          this.notifs = new Notifs;
          this.notifs.query = new Parse.Query(Notif);
          this.notifs.query.equalTo('email', email);
          this.notifs.fetch({
            success: this.setNotifNumber
          });
          this.notifs.bind('reset', this.resetNotif);
          this.render();
          this.search_results = new VideoList;
          this.search_results.query = new Parse.Query(Video);
          this.search_results.query.equalTo('class', 'cs61c');
          this.search_results.fetch();
          this.search_results.bind('reset', this.addAll);
          this.news = new NewsList;
          
          this.news.query = new Parse.Query(News);
          this.news.query.equalTo('isAnswer', false);
          this.news.fetch();
          this.news.bind('reset', this.addAllNews);
          this.my_replies = new NewsList;
          this.my_replies.query = new Parse.Query(News);
          this.my_replies.query.equalTo("asker", email);
          this.my_replies.fetch();
        },
        addAll: function(collection) {
          var num = 0;
          collection.each(function(video){
            var view = new VideoView({model: video});
            $('#first-row').prepend(view.render().el);
          });
        },
        addAllNews: function(collection) {
          var num = 0;
          $('#activity').html('');
          collection.each(function(news) {
            var view = new NewsView({model: news});
            $('#activity').prepend(view.render().el);
          });
        },

        renderNormal: function() {
          this.addAllNews(this.news);
        },

        setNotifNumber: function(collection) {
          console.log(collection.length);
          $('#number-notifs').html(collection.length);
        },

        resetNotif: function(collection) {
          console.log(collection.length);
          notification = collection.length;
        },

        renderReplies: function() {
          $('#activity').html('');
          notification = 0;
          this.notifs.each( function(reply) {
            reply.destroy();
          })
          this.setNotifNumber(0);
          this.my_replies.each(function(reply){
            var view = new NewsView({model: reply});
            $('#activity').prepend(view.render().el);
          });
        },

        logOut: function(e) {
          Parse.User.logOut();
          new StartView();
          this.undelegateEvents();
          delete this;
        },
        render: function() {
          this.$el.html(_.template($("#profile-template").html()));

          return this;
        },

    });
    var AppView = Parse.View.extend({

        initialize: function() {
          this.render();
        },
        render: function() {
          if (Parse.User.current() && Parse.User.current().get("username") !== "user@berkeley.edu") {
            new ProfileView();
          } else {

            Parse.User.logIn("userBeta@berkeley.edu", "helloWorld!", {
              success: function(user) {
                new ProfileView();
              },

              error: function(user, error) {
                console.log("error");
              }
            });          
          }
            //new StartView();
      }
    });

    // Finally, we kick things off by creating the **App**.
    var App = new AppView;
    //Parse.history.start();
});
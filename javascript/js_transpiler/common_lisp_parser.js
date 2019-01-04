/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var common_lisp_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,12],$V2=[1,8],$V3=[1,9],$V4=[1,11],$V5=[5,12,24],$V6=[1,31],$V7=[1,21],$V8=[1,22],$V9=[1,28],$Va=[1,29],$Vb=[1,24],$Vc=[1,27],$Vd=[1,25],$Ve=[1,26],$Vf=[1,32],$Vg=[1,33],$Vh=[1,34],$Vi=[1,35],$Vj=[1,23],$Vk=[5,8,10,12,24,52,53,55],$Vl=[5,8,10,12,24,25,52,53,55],$Vm=[1,38],$Vn=[8,10,52,53,55],$Vo=[8,10,12,52,53,55],$Vp=[1,67],$Vq=[10,12],$Vr=[1,131];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"(":8,"defun":9,"IDENTIFIER":10,"parameters":11,")":12,"defmacro":13,"exprs":14,"statement_with_semicolon":15,"cond":16,"e":17,"bracket_statements":18,"elif":19,"if":20,"let":21,"declare_vars":22,"loop":23,"while":24,"do":25,"declare_var":26,"setf":27,"setq":28,"t":29,"operator":30,"not":31,"or":32,"and":33,"*":34,"/":35,"+":36,"-":37,"comparison_operator":38,">=":39,">":40,"<=":41,"<":42,"equal_exprs":43,"times_exprs":44,"divide_exprs":45,"plus_exprs":46,"minus_exprs":47,"and_exprs":48,"or_exprs":49,"=":50,"function_call":51,"'(":52,"NUMBER":53,"var_name":54,"STRING_LITERAL":55,"parameter":56,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"(",9:"defun",10:"IDENTIFIER",12:")",13:"defmacro",16:"cond",20:"if",21:"let",23:"loop",24:"while",25:"do",27:"setf",28:"setq",29:"t",31:"not",32:"or",33:"and",34:"*",35:"/",36:"+",37:"-",39:">=",40:">",41:"<=",42:"<",50:"=",52:"'(",53:"NUMBER",55:"STRING_LITERAL"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[6,8],[6,8],[6,1],[6,8],[6,5],[6,6],[6,7],[6,7],[6,7],[26,4],[22,2],[22,1],[15,1],[15,5],[15,5],[18,1],[19,5],[19,4],[30,0],[30,1],[30,1],[30,1],[30,1],[30,1],[30,1],[30,1],[30,1],[38,1],[38,1],[38,1],[38,1],[43,2],[43,1],[44,2],[44,1],[45,2],[45,1],[46,2],[46,1],[47,2],[47,1],[48,2],[48,1],[49,2],[49,1],[17,5],[17,5],[17,5],[17,5],[17,5],[17,5],[17,5],[17,5],[17,1],[17,3],[17,1],[17,1],[17,1],[56,1],[11,2],[11,1],[51,3],[51,4],[54,1],[14,2],[14,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2: case 15:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 16: case 65:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["statements",$$[$0]]
break;
case 5:
this.$ = ["function","public","Object",$$[$0-5],$$[$0-3],$$[$0-1]]
break;
case 6:
this.$ = ["macro",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 7:
this.$=["semicolon",$$[$0]];
break;
case 8:
this.$ = ["if",$$[$0-4],$$[$0-3],$$[$0-1]];
break;
case 9:
this.$ = ["if",$$[$0-2],$$[$0-1]];
break;
case 10:
this.$ = ["if",$$[$0-3],$$[$0-2]];
break;
case 11:
this.$ = ["lexically_scoped_vars",$$[$0-3],["statements",$$[$0-1]]];
break;
case 12:
this.$ = ["while",$$[$0-3],$$[$0-1]];
break;
case 13:
this.$ = ["do_while",$$[$0-3],$$[$0-1]];
break;
case 14:
this.$ = ["lexically_scoped_var","Object",$$[$0-2],$$[$0-1]]
break;
case 17:
this.$ = ["return",$$[$0]]
break;
case 18: case 19:
this.$ = ["set_var",$$[$0-2],$$[$0-1]];
break;
case 20:
this.$= ["statements",[$$[$0]]];
break;
case 21:
this.$ = ["elif",$$[$0-3],$$[$0-2],$$[$0]]
break;
case 22:
this.$ = ["else",$$[$0-1]];
break;
case 24:
this.$ = "!"
break;
case 25:
this.$ = "logic_or";
break;
case 26:
this.$ = "logic_and";
break;
case 36:
this.$ = ["logic_equals",$$[$0-1],$$[$0]]
break;
case 38:
this.$ = ["*",$$[$0-1],$$[$0]]
break;
case 40:
this.$ = ["/",$$[$0-1],$$[$0]]
break;
case 42:
this.$ = ["+",$$[$0-1],$$[$0]]
break;
case 44:
this.$ = ["-",$$[$0-1],$$[$0]]
break;
case 46:
this.$ = ["logic_and",$$[$0-1],$$[$0]]
break;
case 48:
this.$ = ["logic_or",$$[$0-1],$$[$0]]
break;
case 50:
this.$ = ["==",$$[$0-2],$$[$0-1]];
break;
case 51: case 52: case 53: case 54: case 57:
this.$ = [$$[$0-3],$$[$0-2],$$[$0-1]];
break;
case 55:
this.$ = ["||",$$[$0-2],$$[$0-1]];
break;
case 56:
this.$ = ["&&",$$[$0-2],$$[$0-1]];
break;
case 59:
this.$ = ["initializer_list","Object",$$[$0-1]]
break;
case 60: case 61: case 62:
this.$ = yytext;
break;
case 63:
this.$ = ["Object", $$[$0]];
break;
case 64: case 69:
this.$ = $$[$0-1].concat([$$[$0]]);
break;
case 66:
this.$ = ["function_call",$$[$0-1],[]];
break;
case 67:
this.$ = ["function_call",$$[$0-2],$$[$0-1]];
break;
case 70:
this.$ = [$$[$0]];
break;
}
},
table: [{3:1,4:2,6:3,8:$V0,10:$V1,15:5,17:6,51:7,52:$V2,53:$V3,54:10,55:$V4},{1:[3]},{5:[1,13]},o($V5,[2,3],{6:3,15:5,17:6,51:7,54:10,4:14,8:$V0,10:$V1,52:$V2,53:$V3,55:$V4}),{9:[1,15],10:$V6,13:[1,16],16:[1,17],20:[1,18],21:[1,19],23:[1,20],27:$V7,28:$V8,32:$V9,33:$Va,34:$Vb,35:$Vc,36:$Vd,37:$Ve,38:30,39:$Vf,40:$Vg,41:$Vh,42:$Vi,50:$Vj},o($Vk,[2,7]),o($Vk,[2,17]),o($Vl,[2,58]),{8:$Vm,10:$V1,14:36,17:37,51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vl,[2,60]),o($Vl,[2,61]),o($Vl,[2,62]),o($Vl,[2,68]),{1:[2,1]},o($V5,[2,2]),{10:[1,39]},{10:[1,40]},{8:[1,41]},{8:$Vm,10:$V1,17:42,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:[1,43]},{24:[1,44],25:[1,45]},{8:$Vm,10:$V1,17:46,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:47,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:48,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:49,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:50,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:51,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:52,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:53,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:54,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:55,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,12:[1,56],14:57,17:37,51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vn,[2,32]),o($Vn,[2,33]),o($Vn,[2,34]),o($Vn,[2,35]),{8:$Vm,10:$V1,12:[1,58],17:59,51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vo,[2,70]),{10:$V6,32:$V9,33:$Va,34:$Vb,35:$Vc,36:$Vd,37:$Ve,38:30,39:$Vf,40:$Vg,41:$Vh,42:$Vi,50:$Vj},{8:[1,60]},{8:[1,61]},{8:$Vm,10:$V1,17:62,51:7,52:$V2,53:$V3,54:10,55:$V4},{6:64,8:$V0,10:$V1,15:5,17:6,18:63,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vp,22:65,26:66},{8:$Vm,10:$V1,17:68,51:7,52:$V2,53:$V3,54:10,55:$V4},{4:70,6:3,7:69,8:$V0,10:$V1,15:5,17:6,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:71,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:72,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:74,43:73,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:76,44:75,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:78,46:77,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:80,47:79,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:82,45:81,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:84,49:83,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:86,48:85,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:87,51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vl,[2,66]),{8:$Vm,10:$V1,12:[1,88],17:59,51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vl,[2,59]),o($Vo,[2,69]),{10:$V1,11:89,54:91,56:90},{8:$Vm,10:$V1,14:92,17:37,51:7,52:$V2,53:$V3,54:10,55:$V4},{6:64,8:$V0,10:$V1,15:5,17:6,18:93,51:7,52:$V2,53:$V3,54:10,55:$V4},{6:64,8:$V0,10:$V1,12:[1,94],15:5,17:6,18:95,51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vo,[2,20]),{12:[1,96]},{8:$Vp,12:[2,16],22:97,26:66},{10:[1,98]},{25:[1,99]},{24:[1,100]},o([12,24],[2,4]),{12:[1,101]},{12:[1,102]},{8:$Vm,10:$V1,12:[1,103],17:104,51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vo,[2,37]),{8:$Vm,10:$V1,12:[1,105],17:106,51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vo,[2,39]),{8:$Vm,10:$V1,12:[1,107],17:108,51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vo,[2,43]),{8:$Vm,10:$V1,12:[1,109],17:110,51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vo,[2,45]),{8:$Vm,10:$V1,12:[1,111],17:112,51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vo,[2,41]),{8:$Vm,10:$V1,12:[1,113],17:114,51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vo,[2,49]),{8:$Vm,10:$V1,12:[1,115],17:116,51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vo,[2,47]),{12:[1,117]},o($Vl,[2,67]),{10:$V1,12:[1,118],54:91,56:119},o($Vq,[2,65]),o($Vq,[2,63]),{8:$Vm,10:$V1,12:[1,120],17:59,51:7,52:$V2,53:$V3,54:10,55:$V4},{12:[1,121]},o($Vk,[2,9]),{12:[1,122]},{6:64,8:$V0,10:$V1,15:5,17:6,18:123,51:7,52:$V2,53:$V3,54:10,55:$V4},{12:[2,15]},{8:$Vm,10:$V1,17:124,51:7,52:$V2,53:$V3,54:10,55:$V4},{4:70,6:3,7:125,8:$V0,10:$V1,15:5,17:6,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vm,10:$V1,17:126,51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vk,[2,18]),o($Vk,[2,19]),o($Vl,[2,50]),o($Vo,[2,36]),o($Vl,[2,51]),o($Vo,[2,38]),o($Vl,[2,52]),o($Vo,[2,42]),o($Vl,[2,53]),o($Vo,[2,44]),o($Vl,[2,54]),o($Vo,[2,40]),o($Vl,[2,55]),o($Vo,[2,48]),o($Vl,[2,56]),o($Vo,[2,46]),o($Vl,[2,57]),{6:127,8:$V0,10:$V1,15:5,17:6,51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vq,[2,64]),{8:[1,129],10:$V1,15:128,17:6,51:7,52:$V2,53:$V3,54:10,55:$V4},{8:$Vr,19:130},o($Vk,[2,10]),{12:[1,132]},{12:[1,133]},{12:[1,134]},{12:[1,135]},{12:[1,136]},{12:[1,137]},{10:$V6,27:$V7,28:$V8,32:$V9,33:$Va,34:$Vb,35:$Vc,36:$Vd,37:$Ve,38:30,39:$Vf,40:$Vg,41:$Vh,42:$Vi,50:$Vj},{12:[1,138]},{8:$Vm,10:$V1,17:139,29:[1,140],51:7,52:$V2,53:$V3,54:10,55:$V4},o($Vk,[2,11]),o([8,12],[2,14]),o($Vk,[2,12]),o($Vk,[2,13]),o($Vk,[2,5]),o($Vk,[2,6]),o($Vk,[2,8]),{6:64,8:$V0,10:$V1,15:5,17:6,18:141,51:7,52:$V2,53:$V3,54:10,55:$V4},{6:64,8:$V0,10:$V1,15:5,17:6,18:142,51:7,52:$V2,53:$V3,54:10,55:$V4},{12:[1,143]},{12:[1,144]},{8:$Vr,19:145},{12:[2,22]},{12:[2,21]}],
defaultActions: {13:[2,1],97:[2,15],144:[2,22],145:[2,21]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace and line comments */
break;
case 1:return 53
break;
case 2:return 55
break;
case 3:return "'("
break;
case 4:return 13
break;
case 5:return 9
break;
case 6:return 24
break;
case 7:return 16
break;
case 8:return 23
break;
case 9:return 27
break;
case 10:return 28
break;
case 11:return 20
break;
case 12:return 25
break;
case 13:return 29
break;
case 14:return 21
break;
case 15:return 31
break;
case 16:return 33
break;
case 17:return '?'
break;
case 18:return 39
break;
case 19:return 40
break;
case 20:return 41
break;
case 21:return 42
break;
case 22:return '=>'
break;
case 23:return '=='
break;
case 24:return 50
break;
case 25:return '*='
break;
case 26:return 34
break;
case 27:return '/='
break;
case 28:return 35
break;
case 29:return '-='
break;
case 30:return '--'
break;
case 31:return 37
break;
case 32:return '++'
break;
case 33:return '+='
break;
case 34:return 36
break;
case 35:return '^'
break;
case 36:return '{'
break;
case 37:return '}'
break;
case 38:return '['
break;
case 39:return ']'
break;
case 40:return 8
break;
case 41:return 12
break;
case 42:return 10
break;
case 43:return 5
break;
case 44:return 'INVALID'
break;
}
},
rules: [/^(?:(\s+|;+.*\n))/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:'\()/,/^(?:defmacro\b)/,/^(?:defun\b)/,/^(?:while\b)/,/^(?:cond\b)/,/^(?:loop\b)/,/^(?:setf\b)/,/^(?:setq\b)/,/^(?:if\b)/,/^(?:do\b)/,/^(?:t\b)/,/^(?:let\b)/,/^(?:not\b)/,/^(?:and\b)/,/^(?:\?)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:=>)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = common_lisp_parser;
exports.Parser = common_lisp_parser.Parser;
exports.parse = function () { return common_lisp_parser.parse.apply(common_lisp_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}
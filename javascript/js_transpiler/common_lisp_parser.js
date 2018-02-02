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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,11],$V2=[1,8],$V3=[1,10],$V4=[5,12,20],$V5=[1,28],$V6=[1,25],$V7=[1,26],$V8=[1,21],$V9=[1,24],$Va=[1,22],$Vb=[1,23],$Vc=[1,29],$Vd=[1,30],$Ve=[1,31],$Vf=[1,32],$Vg=[1,20],$Vh=[5,8,10,12,20,47,49],$Vi=[5,8,10,12,20,21,47,49],$Vj=[1,36],$Vk=[8,10,47,49],$Vl=[8,10,12,47,49],$Vm=[10,12],$Vn=[1,111];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"(":8,"defun":9,"IDENTIFIER":10,"parameters":11,")":12,"statement_with_semicolon":13,"cond":14,"e":15,"bracket_statements":16,"elif":17,"if":18,"loop":19,"while":20,"do":21,"setf":22,"setq":23,"t":24,"operator":25,"not":26,"or":27,"and":28,"*":29,"/":30,"+":31,"-":32,"comparison_operator":33,">=":34,">":35,"<=":36,"<":37,"equal_exprs":38,"times_exprs":39,"divide_exprs":40,"plus_exprs":41,"minus_exprs":42,"and_exprs":43,"or_exprs":44,"=":45,"function_call":46,"NUMBER":47,"var_name":48,"STRING_LITERAL":49,"parameter":50,"exprs":51,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"(",9:"defun",10:"IDENTIFIER",12:")",14:"cond",18:"if",19:"loop",20:"while",21:"do",22:"setf",23:"setq",24:"t",26:"not",27:"or",28:"and",29:"*",30:"/",31:"+",32:"-",34:">=",35:">",36:"<=",37:"<",45:"=",47:"NUMBER",49:"STRING_LITERAL"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[6,8],[6,1],[6,8],[6,5],[6,6],[6,7],[6,7],[13,1],[13,5],[13,5],[16,1],[17,5],[17,4],[25,0],[25,1],[25,1],[25,1],[25,1],[25,1],[25,1],[25,1],[25,1],[33,1],[33,1],[33,1],[33,1],[38,2],[38,1],[39,2],[39,1],[40,2],[40,1],[41,2],[41,1],[42,2],[42,1],[43,2],[43,1],[44,2],[44,1],[15,5],[15,5],[15,5],[15,5],[15,5],[15,5],[15,5],[15,5],[15,1],[15,1],[15,1],[15,1],[50,1],[11,2],[11,1],[46,3],[46,4],[48,1],[51,2],[51,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 59:
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
this.$=["semicolon",$$[$0]];
break;
case 7:
this.$ = ["if",$$[$0-4],$$[$0-3],$$[$0-1]];
break;
case 8:
this.$ = ["if",$$[$0-2],$$[$0-1]];
break;
case 9:
this.$ = ["if",$$[$0-3],$$[$0-2]];
break;
case 10:
this.$ = ["while",$$[$0-3],$$[$0-1]];
break;
case 11:
this.$ = ["do_while",$$[$0-3],$$[$0-1]];
break;
case 12:
this.$ = ["return",$$[$0]]
break;
case 13: case 14:
this.$ = ["set_var",$$[$0-2],$$[$0-1]];
break;
case 15:
this.$= ["statements",[$$[$0]]];
break;
case 16:
this.$ = ["elif",$$[$0-3],$$[$0-2],$$[$0]]
break;
case 17:
this.$ = ["else",$$[$0-1]];
break;
case 19:
this.$ = "!"
break;
case 20:
this.$ = "logic_or";
break;
case 21:
this.$ = "logic_and";
break;
case 31:
this.$ = ["logic_equals",$$[$0-1],$$[$0]]
break;
case 33:
this.$ = ["*",$$[$0-1],$$[$0]]
break;
case 35:
this.$ = ["/",$$[$0-1],$$[$0]]
break;
case 37:
this.$ = ["+",$$[$0-1],$$[$0]]
break;
case 39:
this.$ = ["-",$$[$0-1],$$[$0]]
break;
case 41:
this.$ = ["logic_and",$$[$0-1],$$[$0]]
break;
case 43:
this.$ = ["logic_or",$$[$0-1],$$[$0]]
break;
case 45: case 46: case 47: case 48: case 49: case 52:
this.$ = [$$[$0-3],$$[$0-2],$$[$0-1]];
break;
case 50:
this.$ = ["||",$$[$0-2],$$[$0-1]];
break;
case 51:
this.$ = ["&&",$$[$0-2],$$[$0-1]];
break;
case 54: case 55: case 56:
this.$ = yytext;
break;
case 57:
this.$ = ["Object", $$[$0]];
break;
case 58: case 63:
this.$ = $$[$0-1].concat([$$[$0]]);
break;
case 60:
this.$ = ["function_call",$$[$0-1],[]];
break;
case 61:
this.$ = ["function_call",$$[$0-2],$$[$0-1]];
break;
case 64:
this.$ = [$$[$0]];
break;
}
},
table: [{3:1,4:2,6:3,8:$V0,10:$V1,13:5,15:6,46:7,47:$V2,48:9,49:$V3},{1:[3]},{5:[1,12]},o($V4,[2,3],{6:3,13:5,15:6,46:7,48:9,4:13,8:$V0,10:$V1,47:$V2,49:$V3}),{9:[1,14],10:$V5,14:[1,15],18:[1,16],19:[1,17],22:[1,18],23:[1,19],27:$V6,28:$V7,29:$V8,30:$V9,31:$Va,32:$Vb,33:27,34:$Vc,35:$Vd,36:$Ve,37:$Vf,45:$Vg},o($Vh,[2,6]),o($Vh,[2,12]),o($Vi,[2,53]),o($Vi,[2,54]),o($Vi,[2,55]),o($Vi,[2,56]),o($Vi,[2,62]),{1:[2,1]},o($V4,[2,2]),{10:[1,33]},{8:[1,34]},{8:$Vj,10:$V1,15:35,46:7,47:$V2,48:9,49:$V3},{20:[1,37],21:[1,38]},{8:$Vj,10:$V1,15:39,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:40,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:41,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:42,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:43,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:44,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:45,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:46,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:47,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:48,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,12:[1,49],15:51,46:7,47:$V2,48:9,49:$V3,51:50},o($Vk,[2,27]),o($Vk,[2,28]),o($Vk,[2,29]),o($Vk,[2,30]),{8:[1,52]},{8:$Vj,10:$V1,15:53,46:7,47:$V2,48:9,49:$V3},{6:55,8:$V0,10:$V1,13:5,15:6,16:54,46:7,47:$V2,48:9,49:$V3},{10:$V5,27:$V6,28:$V7,29:$V8,30:$V9,31:$Va,32:$Vb,33:27,34:$Vc,35:$Vd,36:$Ve,37:$Vf,45:$Vg},{8:$Vj,10:$V1,15:56,46:7,47:$V2,48:9,49:$V3},{4:58,6:3,7:57,8:$V0,10:$V1,13:5,15:6,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:59,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:60,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:62,38:61,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:64,39:63,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:66,41:65,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:68,42:67,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:70,40:69,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:72,44:71,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:74,43:73,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:75,46:7,47:$V2,48:9,49:$V3},o($Vi,[2,60]),{8:$Vj,10:$V1,12:[1,76],15:77,46:7,47:$V2,48:9,49:$V3},o($Vl,[2,64]),{10:$V1,11:78,48:80,50:79},{6:55,8:$V0,10:$V1,13:5,15:6,16:81,46:7,47:$V2,48:9,49:$V3},{6:55,8:$V0,10:$V1,12:[1,82],13:5,15:6,16:83,46:7,47:$V2,48:9,49:$V3},o($Vl,[2,15]),{21:[1,84]},{20:[1,85]},o([12,20],[2,4]),{12:[1,86]},{12:[1,87]},{8:$Vj,10:$V1,12:[1,88],15:89,46:7,47:$V2,48:9,49:$V3},o($Vl,[2,32]),{8:$Vj,10:$V1,12:[1,90],15:91,46:7,47:$V2,48:9,49:$V3},o($Vl,[2,34]),{8:$Vj,10:$V1,12:[1,92],15:93,46:7,47:$V2,48:9,49:$V3},o($Vl,[2,38]),{8:$Vj,10:$V1,12:[1,94],15:95,46:7,47:$V2,48:9,49:$V3},o($Vl,[2,40]),{8:$Vj,10:$V1,12:[1,96],15:97,46:7,47:$V2,48:9,49:$V3},o($Vl,[2,36]),{8:$Vj,10:$V1,12:[1,98],15:99,46:7,47:$V2,48:9,49:$V3},o($Vl,[2,44]),{8:$Vj,10:$V1,12:[1,100],15:101,46:7,47:$V2,48:9,49:$V3},o($Vl,[2,42]),{12:[1,102]},o($Vi,[2,61]),o($Vl,[2,63]),{10:$V1,12:[1,103],48:80,50:104},o($Vm,[2,59]),o($Vm,[2,57]),{12:[1,105]},o($Vh,[2,8]),{12:[1,106]},{4:58,6:3,7:107,8:$V0,10:$V1,13:5,15:6,46:7,47:$V2,48:9,49:$V3},{8:$Vj,10:$V1,15:108,46:7,47:$V2,48:9,49:$V3},o($Vh,[2,13]),o($Vh,[2,14]),o($Vi,[2,45]),o($Vl,[2,31]),o($Vi,[2,46]),o($Vl,[2,33]),o($Vi,[2,47]),o($Vl,[2,37]),o($Vi,[2,48]),o($Vl,[2,39]),o($Vi,[2,49]),o($Vl,[2,35]),o($Vi,[2,50]),o($Vl,[2,43]),o($Vi,[2,51]),o($Vl,[2,41]),o($Vi,[2,52]),{6:109,8:$V0,10:$V1,13:5,15:6,46:7,47:$V2,48:9,49:$V3},o($Vm,[2,58]),{8:$Vn,17:110},o($Vh,[2,9]),{12:[1,112]},{12:[1,113]},{12:[1,114]},{12:[1,115]},{8:$Vj,10:$V1,15:116,24:[1,117],46:7,47:$V2,48:9,49:$V3},o($Vh,[2,10]),o($Vh,[2,11]),o($Vh,[2,5]),o($Vh,[2,7]),{6:55,8:$V0,10:$V1,13:5,15:6,16:118,46:7,47:$V2,48:9,49:$V3},{6:55,8:$V0,10:$V1,13:5,15:6,16:119,46:7,47:$V2,48:9,49:$V3},{12:[1,120]},{12:[1,121]},{8:$Vn,17:122},{12:[2,17]},{12:[2,16]}],
defaultActions: {12:[2,1],121:[2,17],122:[2,16]},
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
case 1:return 47
break;
case 2:return 49
break;
case 3:return 9
break;
case 4:return 20
break;
case 5:return 14
break;
case 6:return 19
break;
case 7:return 22
break;
case 8:return 23
break;
case 9:return 18
break;
case 10:return 21
break;
case 11:return 24
break;
case 12:return 26
break;
case 13:return 28
break;
case 14:return '?'
break;
case 15:return 34
break;
case 16:return 35
break;
case 17:return 36
break;
case 18:return 37
break;
case 19:return '=>'
break;
case 20:return '=='
break;
case 21:return 45
break;
case 22:return '*='
break;
case 23:return 29
break;
case 24:return '/='
break;
case 25:return 30
break;
case 26:return '-='
break;
case 27:return '--'
break;
case 28:return 32
break;
case 29:return '++'
break;
case 30:return '+='
break;
case 31:return 31
break;
case 32:return '^'
break;
case 33:return '{'
break;
case 34:return '}'
break;
case 35:return '['
break;
case 36:return ']'
break;
case 37:return 8
break;
case 38:return 12
break;
case 39:return 10
break;
case 40:return 5
break;
case 41:return 'INVALID'
break;
}
},
rules: [/^(?:(\s+|;+.*\n))/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:defun\b)/,/^(?:while\b)/,/^(?:cond\b)/,/^(?:loop\b)/,/^(?:setf\b)/,/^(?:setq\b)/,/^(?:if\b)/,/^(?:do\b)/,/^(?:t\b)/,/^(?:not\b)/,/^(?:and\b)/,/^(?:\?)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:=>)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41],"inclusive":true}}
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
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
var lua_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,6],$V2=[1,7],$V3=[1,13],$V4=[1,8],$V5=[1,9],$V6=[1,10],$V7=[1,11],$V8=[1,16],$V9=[1,17],$Va=[1,18],$Vb=[5,12,67,68],$Vc=[5,9,12,13,16,19,25,28,30,31,59,62,63,67,68],$Vd=[1,32],$Ve=[1,28],$Vf=[1,27],$Vg=[1,22],$Vh=[1,24],$Vi=[2,48],$Vj=[1,45],$Vk=[1,44],$Vl=[5,9,11,12,13,16,18,19,22,24,25,26,28,30,31,35,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,56,57,59,60,62,63,67,68],$Vm=[2,49],$Vn=[1,53],$Vo=[1,54],$Vp=[1,55],$Vq=[1,56],$Vr=[1,57],$Vs=[1,58],$Vt=[1,59],$Vu=[1,60],$Vv=[1,61],$Vw=[1,62],$Vx=[1,63],$Vy=[1,64],$Vz=[1,65],$VA=[1,66],$VB=[1,67],$VC=[5,9,11,12,13,16,18,19,24,25,26,28,30,31,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,57,59,60,62,63,67,68],$VD=[5,9,11,12,13,16,18,19,24,25,26,28,30,31,35,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,57,59,60,62,63,67,68],$VE=[2,68],$VF=[1,79],$VG=[24,60],$VH=[18,60],$VI=[1,90],$VJ=[1,111],$VK=[2,59],$VL=[5,9,11,12,13,16,18,19,24,25,26,28,30,31,37,38,39,40,41,42,43,44,57,59,60,62,63,67,68],$VM=[5,9,11,12,13,16,18,19,24,25,26,28,30,31,37,38,39,40,41,42,43,44,45,46,47,57,59,60,62,63,67,68],$VN=[5,9,11,12,13,16,18,19,24,25,26,28,30,31,37,38,39,40,41,42,43,44,45,46,47,48,49,50,57,59,60,62,63,67,68],$VO=[1,134],$VP=[1,135];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"statement_with_semicolon":8,"while":9,"e":10,"do":11,"end":12,"repeat":13,"bracket_statements":14,"until":15,"for":16,"_":17,",":18,"IDENTIFIER":19,"in":20,"pairs":21,"(":22,"dot_expr":23,")":24,"if":25,"then":26,"elif":27,"function":28,"parameters":29,"return":30,"local":31,"=":32,"identifiers":33,"access_array":34,".":35,"function_call":36,"or":37,"and":38,"<=":39,"<":40,">=":41,"==":42,"~=":43,">":44,"+":45,"-":46,"..":47,"*":48,"/":49,"%":50,"^":51,"not_expr":52,"!":53,"parentheses_expr":54,"parentheses_expr_":55,"[":56,"]":57,"exprs":58,"{":59,"}":60,"key_values":61,"NUMBER":62,"STRING_LITERAL":63,"type":64,"parameter":65,"types":66,"elseif":67,"else":68,"key_value":69,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"while",11:"do",12:"end",13:"repeat",14:"bracket_statements",15:"until",16:"for",17:"_",18:",",19:"IDENTIFIER",20:"in",21:"pairs",22:"(",24:")",25:"if",26:"then",28:"function",30:"return",31:"local",32:"=",35:".",37:"or",38:"and",39:"<=",40:"<",41:">=",42:"==",43:"~=",44:">",45:"+",46:"-",47:"..",48:"*",49:"/",50:"%",51:"^",53:"!",56:"[",57:"]",59:"{",60:"}",62:"NUMBER",63:"STRING_LITERAL",67:"elseif",68:"else"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[6,1],[6,5],[6,4],[6,12],[6,12],[6,6],[6,5],[6,7],[8,2],[8,4],[8,2],[8,3],[8,3],[8,3],[8,1],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,2],[10,1],[52,2],[52,1],[23,3],[23,1],[34,4],[36,3],[36,4],[55,2],[55,3],[55,3],[55,1],[55,1],[55,1],[54,6],[54,3],[54,1],[54,1],[54,1],[64,1],[65,1],[29,3],[29,1],[29,0],[58,3],[58,1],[66,3],[66,1],[27,5],[27,4],[27,2],[33,3],[33,1],[61,3],[61,1],[69,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]];
break;
case 2:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 40: case 58:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["statements",$$[$0]]
break;
case 5:
this.$ = ["semicolon",$$[$0]];
break;
case 6:
this.$ = ["while",$$[$0-3],$$[$0-1]];
break;
case 7:
this.$ = ["do_while",$$[$0],$$[$0-2]];
break;
case 8:
this.$ = ["foreach","Object",$$[$0-8],$$[$0-4],$$[$0-1]];
break;
case 9:
this.$ = ["foreach_with_index","Object",$$[$0-10],$$[$0-8],$$[$0-4],$$[$0-1]];
break;
case 10:
this.$ = ["if",$$[$0-4],$$[$0-2],$$[$0-1]];
break;
case 11:
this.$ = ["if",$$[$0-3],$$[$0-1]];
break;
case 12:
this.$ = ["function","public","Object",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 13:
this.$ = ["return",$$[$0]];
break;
case 14:
this.$ = ["initialize_var","Object",$$[$0-2],$$[$0]];
break;
case 15:
this.$ = ["initialize_empty_vars","Object",$$[$0]];
break;
case 16: case 17:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 18:
this.$ = [".",[$$[$0-2]].concat($$[$0])]
break;
case 20:
this.$ = ['||',$$[$0-2],$$[$0]];
break;
case 21:
this.$ = ['&&',$$[$0-2],$$[$0]];
break;
case 22: case 23: case 24: case 25: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 26:
this.$ = ["!=",$$[$0-2],$$[$0]];
break;
case 35:
this.$ = ["-",$$[$0]];
break;
case 37:
this.$ = ["!", [".",$$[$0]]];
break;
case 38:
this.$ = [".", $$[$0]];
break;
case 39: case 57: case 60: case 62: case 67:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 41:
this.$ = ["access_array",$$[$0-3],[$$[$0-1]]];
break;
case 42:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 43:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 44:
this.$ = ["initializer_list","Object",[]];
break;
case 45:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 46:
this.$ = ["associative_array","Object","Object",$$[$0-1]];
break;
case 47: case 48: case 49:
this.$ = yytext;
break;
case 50:
this.$ = ["anonymous_function","Object",$$[$0-3],$$[$0-1]];
break;
case 51:
this.$ = ["parentheses",$$[$0-1]];
break;
case 56:
this.$ = ["Object", $$[$0]];
break;
case 59:
this.$ = [];
break;
case 61: case 63: case 68: case 70:
this.$ = [$$[$0]];
break;
case 64:
this.$ = ["elif",$$[$0-3],$$[$0-1],$$[$0]]
break;
case 65:
this.$ = ["elif",$$[$0-2],$$[$0]]
break;
case 66:
this.$ = ["else",$$[$0]];
break;
case 69:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 71:
this.$ = [$$[$0-2],$$[$0]]
break;
}
},
table: [{3:1,4:2,6:3,8:4,9:$V0,13:$V1,16:$V2,19:$V3,25:$V4,28:$V5,30:$V6,31:$V7,34:12,36:14,55:15,59:$V8,62:$V9,63:$Va},{1:[3]},{5:[1,19]},o($Vb,[2,3],{6:3,8:4,34:12,36:14,55:15,4:20,9:$V0,13:$V1,16:$V2,19:$V3,25:$V4,28:$V5,30:$V6,31:$V7,59:$V8,62:$V9,63:$Va}),o($Vc,[2,5]),{10:21,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{14:[1,33]},{17:[1,34],19:[1,35]},{10:36,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{19:[1,37]},{10:38,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{19:[1,39],33:40},{32:[1,41]},o([22,56],$Vi,{32:[1,42],35:[1,43]}),o($Vc,[2,19]),{22:$Vj,56:$Vk},{10:49,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,58:47,59:$V8,60:[1,46],61:48,62:$V9,63:[1,51],69:50},o($Vl,[2,47]),o($Vl,$Vm),{1:[2,1]},o($Vb,[2,2]),{11:[1,52],37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB},{10:68,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},o($VC,[2,36]),{19:$Vd,22:$Ve,23:69,28:$Vf,34:29,36:30,54:26,55:31,59:$V8,62:$V9,63:$Va},o($VC,[2,38]),o($VC,[2,40],{35:[1,70]}),{22:[1,71]},{10:72,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},o($VD,[2,52]),o($VD,[2,53]),o($VD,[2,54],{22:$Vj,56:$Vk}),o($Vl,$Vi),{15:[1,73]},{18:[1,74]},{18:[1,75]},{26:[1,76],37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB},{22:[1,77]},o($Vc,[2,13],{37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB}),o($Vc,$VE,{18:$VF,32:[1,78]}),o($Vc,[2,15]),{10:80,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:81,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{19:$Vd,22:$Ve,23:82,28:$Vf,34:29,36:30,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:83,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:49,19:$Vd,22:$Ve,23:25,24:[1,84],28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,58:85,59:$V8,62:$V9,63:$Va},o($Vl,[2,44]),{60:[1,86]},{18:[1,88],60:[1,87]},o($VG,[2,61],{18:[1,89],37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB}),o($VH,[2,70]),o([18,22,35,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,56,60],$Vm,{32:$VI}),{4:92,6:3,7:91,8:4,9:$V0,13:$V1,16:$V2,19:$V3,25:$V4,28:$V5,30:$V6,31:$V7,34:12,36:14,55:15,59:$V8,62:$V9,63:$Va},{10:93,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:94,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:95,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:96,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:97,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:98,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:99,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:100,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:101,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:102,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:103,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:104,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:105,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:106,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{10:107,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},o($VC,[2,35]),o($VC,[2,37]),{19:$Vd,22:$Ve,23:108,28:$Vf,34:29,36:30,54:26,55:31,59:$V8,62:$V9,63:$Va},{19:$VJ,24:$VK,29:109,65:110},{24:[1,112],37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB},{10:113,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{19:[1,114]},{19:[1,115]},{4:92,6:3,7:116,8:4,9:$V0,13:$V1,16:$V2,19:$V3,25:$V4,28:$V5,30:$V6,31:$V7,34:12,36:14,55:15,59:$V8,62:$V9,63:$Va},{19:$VJ,24:$VK,29:117,65:110},{10:118,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{19:[1,120],33:119},o($Vc,[2,16],{37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB}),o($Vc,[2,17],{37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB}),o($Vc,[2,18]),{37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,57:[1,121]},o($VD,[2,42]),{24:[1,122]},o($Vl,[2,45]),o($Vl,[2,46]),{63:[1,124],69:123},{10:49,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,58:125,59:$V8,62:$V9,63:$Va},{10:126,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{12:[1,127]},o([12,67,68],[2,4]),o([5,9,11,12,13,16,18,19,24,25,26,28,30,31,37,57,59,60,62,63,67,68],[2,20],{38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB}),o([5,9,11,12,13,16,18,19,24,25,26,28,30,31,37,38,57,59,60,62,63,67,68],[2,21],{39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB}),o($VL,[2,22],{45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB}),o($VL,[2,23],{45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB}),o($VL,[2,24],{45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB}),o($VL,[2,25],{45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB}),o($VL,[2,26],{45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB}),o($VL,[2,27],{45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB}),o($VM,[2,28],{48:$Vy,49:$Vz,50:$VA,51:$VB}),o($VM,[2,29],{48:$Vy,49:$Vz,50:$VA,51:$VB}),o($VM,[2,30],{48:$Vy,49:$Vz,50:$VA,51:$VB}),o($VN,[2,31],{51:$VB}),o($VN,[2,32],{51:$VB}),o($VN,[2,33],{51:$VB}),o($VC,[2,34]),o($VC,[2,39]),{24:[1,128]},{18:[1,129],24:[2,58]},o([18,24],[2,56]),o($VD,[2,51]),o($Vc,[2,7],{37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB}),{20:[1,130]},{20:[1,131]},{12:[1,133],27:132,67:$VO,68:$VP},{24:[1,136]},o($Vc,[2,14],{37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB}),o($Vc,[2,67]),o($Vc,$VE,{18:$VF}),o([5,9,11,12,13,16,18,19,24,25,26,28,30,31,32,35,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,57,59,60,62,63,67,68],[2,41]),o($VD,[2,43]),o($VH,[2,69]),{32:$VI},o($VG,[2,60]),o($VH,[2,71],{37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB}),o($Vc,[2,6]),{4:92,6:3,7:137,8:4,9:$V0,13:$V1,16:$V2,19:$V3,25:$V4,28:$V5,30:$V6,31:$V7,34:12,36:14,55:15,59:$V8,62:$V9,63:$Va},{19:$VJ,24:$VK,29:138,65:110},{21:[1,139]},{21:[1,140]},{12:[1,141]},o($Vc,[2,11]),{10:142,19:$Vd,22:$Ve,23:25,28:$Vf,34:29,36:30,46:$Vg,52:23,53:$Vh,54:26,55:31,59:$V8,62:$V9,63:$Va},{4:92,6:3,7:143,8:4,9:$V0,13:$V1,16:$V2,19:$V3,25:$V4,28:$V5,30:$V6,31:$V7,34:12,36:14,55:15,59:$V8,62:$V9,63:$Va},{4:92,6:3,7:144,8:4,9:$V0,13:$V1,16:$V2,19:$V3,25:$V4,28:$V5,30:$V6,31:$V7,34:12,36:14,55:15,59:$V8,62:$V9,63:$Va},{12:[1,145]},{24:[2,57]},{22:[1,146]},{22:[1,147]},o($Vc,[2,10]),{26:[1,148],37:$Vn,38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB},{12:[2,66]},{12:[1,149]},o($VD,[2,50]),{19:$Vd,22:$Ve,23:150,28:$Vf,34:29,36:30,54:26,55:31,59:$V8,62:$V9,63:$Va},{19:$Vd,22:$Ve,23:151,28:$Vf,34:29,36:30,54:26,55:31,59:$V8,62:$V9,63:$Va},{4:92,6:3,7:152,8:4,9:$V0,13:$V1,16:$V2,19:$V3,25:$V4,28:$V5,30:$V6,31:$V7,34:12,36:14,55:15,59:$V8,62:$V9,63:$Va},o($Vc,[2,12]),{24:[1,153]},{24:[1,154]},{12:[2,65],27:155,67:$VO,68:$VP},{11:[1,156]},{11:[1,157]},{12:[2,64]},{4:92,6:3,7:158,8:4,9:$V0,13:$V1,16:$V2,19:$V3,25:$V4,28:$V5,30:$V6,31:$V7,34:12,36:14,55:15,59:$V8,62:$V9,63:$Va},{4:92,6:3,7:159,8:4,9:$V0,13:$V1,16:$V2,19:$V3,25:$V4,28:$V5,30:$V6,31:$V7,34:12,36:14,55:15,59:$V8,62:$V9,63:$Va},{12:[1,160]},{12:[1,161]},o($Vc,[2,8]),o($Vc,[2,9])],
defaultActions: {19:[2,1],138:[2,57],143:[2,66],155:[2,64]},
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
case 1:return 62
break;
case 2:return 63
break;
case 3:return "$"
break;
case 4:return "function"
break;
case 5:return "end"
break;
case 6:return "then"
break;
case 7:return 67
break;
case 8:return 25
break;
case 9:return 68
break;
case 10:return 30
break;
case 11:return 9
break;
case 12:return 16
break;
case 13:return 31
break;
case 14:return 13
break;
case 15:return 15
break;
case 16:return 'of'
break;
case 17:return 'not'
break;
case 18:return 18
break;
case 19:return 47
break;
case 20:return 35
break;
case 21:return ':'
break;
case 22:return 38
break;
case 23:return 37
break;
case 24:return 41
break;
case 25:return 44
break;
case 26:return 39
break;
case 27:return 40
break;
case 28:return 43
break;
case 29:return 42
break;
case 30:return 32
break;
case 31:return '*='
break;
case 32:return 48
break;
case 33:return 49
break;
case 34:return 50
break;
case 35:return 46
break;
case 36:return 45
break;
case 37:return 51
break;
case 38:return 59
break;
case 39:return 60
break;
case 40:return 56
break;
case 41:return 57
break;
case 42:return 22
break;
case 43:return 24
break;
case 44:return 17
break;
case 45:return 21
break;
case 46:return 20
break;
case 47:return 11
break;
case 48:return 19
break;
case 49:return 5
break;
case 50:return 'INVALID'
break;
}
},
rules: [/^(?:(\s+|--+.*\n))/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?:function\b)/,/^(?:end\b)/,/^(?:then\b)/,/^(?:elseif\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:while\b)/,/^(?:for\b)/,/^(?:local\b)/,/^(?:repeat\b)/,/^(?:until\b)/,/^(?:of\b)/,/^(?:not\b)/,/^(?:,)/,/^(?:\.\.)/,/^(?:\.)/,/^(?::)/,/^(?:and\b)/,/^(?:or\b)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:~=)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:_\b)/,/^(?:pairs\b)/,/^(?:in\b)/,/^(?:do\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"inclusive":true}}
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
exports.parser = lua_parser;
exports.Parser = lua_parser.Parser;
exports.parse = function () { return lua_parser.parse.apply(lua_parser, arguments); };
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
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
var scala_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,6],$V2=[1,16],$V3=[1,7],$V4=[1,8],$V5=[1,12],$V6=[1,9],$V7=[1,10],$V8=[1,15],$V9=[1,17],$Va=[1,18],$Vb=[5,19,69],$Vc=[5,10,15,18,19,20,22,23,33,34,64,66,67,69],$Vd=[1,33],$Ve=[1,37],$Vf=[1,27],$Vg=[1,29],$Vh=[1,32],$Vi=[2,56],$Vj=[5,9,10,15,18,19,20,22,23,33,34,64,66,67,69],$Vk=[1,47],$Vl=[1,46],$Vm=[1,51],$Vn=[5,9,10,11,13,15,17,18,19,20,22,23,33,34,41,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,61,62,64,66,67,69,71],$Vo=[1,56],$Vp=[1,57],$Vq=[1,58],$Vr=[1,59],$Vs=[1,60],$Vt=[1,61],$Vu=[1,62],$Vv=[1,63],$Vw=[1,64],$Vx=[1,65],$Vy=[1,66],$Vz=[1,67],$VA=[1,68],$VB=[1,69],$VC=[1,70],$VD=[5,9,10,13,15,18,19,20,22,23,33,34,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,62,64,66,67,69,71],$VE=[5,9,10,13,15,17,18,19,20,22,23,33,34,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,62,64,66,67,69,71],$VF=[5,9,10,13,15,17,18,19,20,22,23,33,34,41,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,62,64,66,67,69,71],$VG=[19,71],$VH=[2,68],$VI=[1,99],$VJ=[1,129],$VK=[5,9,10,13,15,18,19,20,22,23,33,34,43,44,45,46,47,48,49,50,62,64,66,67,69,71],$VL=[5,9,10,13,15,18,19,20,22,23,33,34,43,44,45,46,47,48,49,50,51,52,53,62,64,66,67,69,71],$VM=[5,9,10,13,15,18,19,20,22,23,33,34,43,44,45,46,47,48,49,50,51,52,53,54,55,56,62,64,66,67,69,71],$VN=[1,143];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"statement_with_semicolon":8,";":9,"while":10,"(":11,"e":12,")":13,"bracket_statements":14,"for":15,"dot_expr":16,"<-":17,"{":18,"}":19,"if":20,"elif":21,"def":22,"IDENTIFIER":23,"parameters":24,":":25,"=":26,"case_statement":27,"parentheses_expr":28,"=>":29,"case_statements_":30,"case_statements":31,"_":32,"return":33,"var":34,"type":35,"access_array":36,"+=":37,"-=":38,"*=":39,"/=":40,".":41,"function_call":42,"or":43,"and":44,"<=":45,"<":46,">=":47,"==":48,"!=":49,">":50,"+":51,"-":52,"..":53,"*":54,"/":55,"%":56,"^":57,"not_expr":58,"!":59,"parentheses_expr_":60,"[":61,"]":62,"exprs":63,"Array":64,"key_values":65,"NUMBER":66,"STRING_LITERAL":67,"function":68,"end":69,"parameter":70,",":71,"types":72,"else":73,"identifiers":74,"key_value":75,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:";",10:"while",11:"(",13:")",15:"for",17:"<-",18:"{",19:"}",20:"if",22:"def",23:"IDENTIFIER",25:":",26:"=",29:"=>",32:"_",33:"return",34:"var",37:"+=",38:"-=",39:"*=",40:"/=",41:".",43:"or",44:"and",45:"<=",46:"<",47:">=",48:"==",49:"!=",50:">",51:"+",52:"-",53:"..",54:"*",55:"/",56:"%",57:"^",59:"!",61:"[",62:"]",64:"Array",66:"NUMBER",67:"STRING_LITERAL",68:"function",69:"end",71:",",73:"else"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[6,1],[6,2],[6,5],[6,9],[6,6],[6,5],[6,11],[27,3],[30,2],[30,1],[31,4],[31,1],[8,2],[8,6],[8,4],[8,3],[8,3],[8,3],[8,3],[8,3],[8,3],[8,3],[8,1],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,2],[12,1],[58,2],[58,1],[16,3],[16,1],[36,4],[42,3],[42,4],[60,3],[60,4],[60,3],[60,1],[60,1],[60,1],[28,6],[28,3],[28,1],[28,1],[28,1],[35,1],[35,4],[70,3],[24,3],[24,1],[24,0],[63,3],[63,1],[72,3],[72,1],[21,9],[21,4],[74,3],[74,1],[65,3],[65,1],[75,3],[14,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]];
break;
case 2: case 13:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 14: case 48: case 67:
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
this.$ = ["semicolon",$$[$0-1]];
break;
case 7:
this.$ = ["while",$$[$0-2],$$[$0]];
break;
case 8:
this.$ = ["foreach","Object",$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 9:
this.$ = ["if",$$[$0-3],$$[$0-1],$$[$0]];
break;
case 10:
this.$ = ["if",$$[$0-2],$$[$0]];
break;
case 11:
this.$ = ["function","public",$$[$0-4],$$[$0-9],$$[$0-7],$$[$0-1]];
break;
case 12:
this.$ = ["case",$$[$0-2],["statements",[$$[$0]]]]
break;
case 15:
this.$ = $$[$0-3].concat([["default",$$[$0]]])
break;
case 17:
this.$ = ["return",$$[$0]];
break;
case 18:
this.$ = ["initialize_var",$$[$0-2],$$[$0-4],$$[$0]];
break;
case 19:
this.$ = ["initialize_var","Object",$$[$0-2],$$[$0]];
break;
case 20: case 21:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 22: case 23: case 24: case 25: case 30: case 31: case 32: case 33: case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 26:
this.$ = [".",[$$[$0-2]].concat($$[$0])]
break;
case 28:
this.$ = ['||',$$[$0-2],$$[$0]];
break;
case 29:
this.$ = ['&&',$$[$0-2],$$[$0]];
break;
case 34:
this.$ = ["!=",$$[$0-2],$$[$0]];
break;
case 43:
this.$ = ["-",$$[$0]];
break;
case 45:
this.$ = ["!", [".",$$[$0]]];
break;
case 46:
this.$ = [".", $$[$0]];
break;
case 47: case 66: case 69: case 71: case 75:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 49:
this.$ = ["access_array",$$[$0-3],[$$[$0-1]]];
break;
case 50:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 51:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 52:
this.$ = ["initializer_list","Object",[]];
break;
case 53:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 54:
this.$ = ["associative_array","Object","Object",$$[$0-1]];
break;
case 55: case 56: case 57:
this.$ = yytext;
break;
case 58:
this.$ = ["anonymous_function","Object",$$[$0-3],$$[$0-1]];
break;
case 59:
this.$ = ["parentheses",$$[$0-1]];
break;
case 64:
this.$ = [$$[$0-1],"[]"]
break;
case 65:
this.$ = [$$[$0],$$[$0-2]];
break;
case 68:
this.$ = [];
break;
case 70: case 72: case 76: case 78:
this.$ = [$$[$0]];
break;
case 73:
this.$ = ["elif",$$[$0-5],$$[$0-2],$$[$0]]
break;
case 74:
this.$ = ["else",$$[$0-1]];
break;
case 77:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 79:
this.$ = [$$[$0-2],$$[$0]]
break;
case 80:
this.$= $$[$0-1];
break;
}
},
table: [{3:1,4:2,6:3,8:4,10:$V0,15:$V1,18:$V2,20:$V3,22:$V4,23:$V5,33:$V6,34:$V7,36:11,42:13,60:14,64:$V8,66:$V9,67:$Va},{1:[3]},{5:[1,19]},o($Vb,[2,3],{6:3,8:4,36:11,42:13,60:14,4:20,10:$V0,15:$V1,18:$V2,20:$V3,22:$V4,23:$V5,33:$V6,34:$V7,64:$V8,66:$V9,67:$Va}),o($Vc,[2,5],{9:[1,21]}),{11:[1,22]},{11:[1,23]},{11:[1,24]},{23:[1,25]},{11:$Vd,12:26,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{23:[1,38]},{26:[1,39]},o([11,61],$Vi,{26:[1,40],37:[1,41],38:[1,42],39:[1,43],40:[1,44],41:[1,45]}),o($Vj,[2,27]),{11:$Vk,61:$Vl},{11:[1,48]},{65:49,67:$Vm,75:50},o($Vn,[2,55]),o($Vn,[2,57]),{1:[2,1]},o($Vb,[2,2]),o($Vc,[2,6]),{11:$Vd,12:52,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,16:53,18:$V2,23:$Ve,28:31,36:34,42:35,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:54,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:[1,55]},o($Vj,[2,17],{43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),{11:$Vd,12:71,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},o($VD,[2,44]),{11:$Vd,16:72,18:$V2,23:$Ve,28:31,36:34,42:35,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},o($VD,[2,46]),o($VE,[2,48],{41:[1,73]}),{11:[1,74]},{11:$Vd,12:75,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},o($VF,[2,60]),o($VF,[2,61]),o($VF,[2,62],{11:$Vk,61:$Vl}),o($Vn,$Vi),{25:[1,76],26:[1,77]},{11:$Vd,12:78,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:79,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:80,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:81,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:82,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:83,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,16:84,18:$V2,23:$Ve,28:31,36:34,42:35,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:85,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:88,13:[1,86],16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,63:87,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:88,13:[1,89],16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,63:90,64:$V8,66:$V9,67:$Va,68:$Vh},{19:[1,91],71:[1,92]},o($VG,[2,78]),{26:[1,93]},{13:[1,94],43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC},{17:[1,95]},{13:[1,96],43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC},{13:$VH,23:$VI,24:97,70:98},{11:$Vd,12:100,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:101,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:102,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:103,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:104,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:105,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:106,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:107,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:108,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:109,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:110,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:111,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:112,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:113,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{11:$Vd,12:114,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},o($VD,[2,43]),o($VD,[2,45]),{11:$Vd,16:115,18:$V2,23:$Ve,28:31,36:34,42:35,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{13:$VH,23:$VI,24:116,70:98},{13:[1,117],43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC},{23:[1,119],35:118,64:[1,120]},{11:$Vd,12:121,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},o($Vj,[2,20],{43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o($Vj,[2,21],{43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o($Vj,[2,22],{43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o($Vj,[2,23],{43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o($Vj,[2,24],{43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o($Vj,[2,25],{43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o($Vj,[2,26]),{43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC,62:[1,122]},o($VF,[2,50]),{13:[1,123]},{13:[2,70],43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC,71:[1,124]},o($Vn,[2,52]),{13:[1,125]},o($Vn,[2,54]),{67:$Vm,75:126},{11:$Vd,12:127,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{14:128,18:$VJ},{11:$Vd,16:130,18:$V2,23:$Ve,28:31,36:34,42:35,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{14:131,18:$VJ},{13:[1,132]},{13:[2,67],71:[1,133]},{25:[1,134]},o([5,9,10,13,15,18,19,20,22,23,33,34,43,62,64,66,67,69,71],[2,28],{44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o([5,9,10,13,15,18,19,20,22,23,33,34,43,44,62,64,66,67,69,71],[2,29],{45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o($VK,[2,30],{51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o($VK,[2,31],{51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o($VK,[2,32],{51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o($VK,[2,33],{51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o($VK,[2,34],{51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o($VK,[2,35],{51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o($VL,[2,36],{54:$Vz,55:$VA,56:$VB,57:$VC}),o($VL,[2,37],{54:$Vz,55:$VA,56:$VB,57:$VC}),o($VL,[2,38],{54:$Vz,55:$VA,56:$VB,57:$VC}),o($VM,[2,39],{57:$VC}),o($VM,[2,40],{57:$VC}),o($VM,[2,41],{57:$VC}),o($VD,[2,42]),o($VE,[2,47]),{13:[1,135]},o($VF,[2,59]),{26:[1,136]},{26:[2,63]},{61:[1,137]},o($Vj,[2,19],{43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o([5,9,10,13,15,17,18,19,20,22,23,26,33,34,41,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,62,64,66,67,69,71],[2,49]),o($VF,[2,51]),{11:$Vd,12:88,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,63:138,64:$V8,66:$V9,67:$Va,68:$Vh},o($Vn,[2,53]),o($VG,[2,77]),o($VG,[2,79],{43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),o($Vc,[2,7]),{4:140,6:3,7:139,8:4,10:$V0,15:$V1,18:$V2,20:$V3,22:$V4,23:$V5,33:$V6,34:$V7,36:11,42:13,60:14,64:$V8,66:$V9,67:$Va},{13:[1,141]},o($Vc,[2,10],{21:142,73:$VN}),{25:[1,144]},{13:$VH,23:$VI,24:145,70:98},{23:[1,146]},{4:140,6:3,7:147,8:4,10:$V0,15:$V1,18:$V2,20:$V3,22:$V4,23:$V5,33:$V6,34:$V7,36:11,42:13,60:14,64:$V8,66:$V9,67:$Va},{11:$Vd,12:148,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{23:[1,149]},{13:[2,69]},{19:[1,150]},o([19,69],[2,4]),{18:[1,151]},o($Vc,[2,9]),{18:[1,153],20:[1,152]},{23:[1,154]},{13:[2,66]},o([13,71],[2,65]),{69:[1,155]},o($Vj,[2,18],{43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC}),{62:[1,156]},o([5,10,15,18,19,20,22,23,33,34,64,66,67,69,73],[2,80]),{4:140,6:3,7:157,8:4,10:$V0,15:$V1,18:$V2,20:$V3,22:$V4,23:$V5,33:$V6,34:$V7,36:11,42:13,60:14,64:$V8,66:$V9,67:$Va},{11:[1,158]},{4:140,6:3,7:159,8:4,10:$V0,15:$V1,18:$V2,20:$V3,22:$V4,23:$V5,33:$V6,34:$V7,36:11,42:13,60:14,64:$V8,66:$V9,67:$Va},{26:[1,160]},o($VF,[2,58]),{26:[2,64]},{19:[1,161]},{11:$Vd,12:162,16:30,18:$V2,23:$Ve,28:31,36:34,42:35,52:$Vf,58:28,59:$Vg,60:36,64:$V8,66:$V9,67:$Va,68:$Vh},{19:[1,163]},{18:[1,164]},o($Vc,[2,8]),{13:[1,165],43:$Vo,44:$Vp,45:$Vq,46:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,52:$Vx,53:$Vy,54:$Vz,55:$VA,56:$VB,57:$VC},o($Vc,[2,74]),{4:140,6:3,7:166,8:4,10:$V0,15:$V1,18:$V2,20:$V3,22:$V4,23:$V5,33:$V6,34:$V7,36:11,42:13,60:14,64:$V8,66:$V9,67:$Va},{18:[1,167]},{19:[1,168]},{4:140,6:3,7:169,8:4,10:$V0,15:$V1,18:$V2,20:$V3,22:$V4,23:$V5,33:$V6,34:$V7,36:11,42:13,60:14,64:$V8,66:$V9,67:$Va},o($Vc,[2,11]),{19:[1,170]},{21:171,73:$VN},o($Vc,[2,73])],
defaultActions: {19:[2,1],119:[2,63],138:[2,69],145:[2,66],156:[2,64]},
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
case 1:return 66
break;
case 2:return 67
break;
case 3:return "$"
break;
case 4:return "def"
break;
case 5:return "end"
break;
case 6:return 64
break;
case 7:return 20
break;
case 8:return 73
break;
case 9:return 33
break;
case 10:return 10
break;
case 11:return 'match'
break;
case 12:return 15
break;
case 13:return 34
break;
case 14:return 'of'
break;
case 15:return 'not'
break;
case 16:return 71
break;
case 17:return 53
break;
case 18:return 41
break;
case 19:return 25
break;
case 20:return 9
break;
case 21:return 44
break;
case 22:return 43
break;
case 23:return 47
break;
case 24:return 50
break;
case 25:return 17
break;
case 26:return 45
break;
case 27:return 46
break;
case 28:return 49
break;
case 29:return 29
break;
case 30:return 48
break;
case 31:return 26
break;
case 32:return 39
break;
case 33:return 54
break;
case 34:return 40
break;
case 35:return 55
break;
case 36:return 56
break;
case 37:return 38
break;
case 38:return 52
break;
case 39:return 37
break;
case 40:return 51
break;
case 41:return 57
break;
case 42:return 18
break;
case 43:return 19
break;
case 44:return 61
break;
case 45:return 62
break;
case 46:return 11
break;
case 47:return 13
break;
case 48:return 32
break;
case 49:return 'pairs'
break;
case 50:return 'in'
break;
case 51:return 'do'
break;
case 52:return 23
break;
case 53:return 5
break;
case 54:return 'INVALID'
break;
}
},
rules: [/^(?:(\s+|--+.*\n))/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?:def\b)/,/^(?:end\b)/,/^(?:Array\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:while\b)/,/^(?:match\b)/,/^(?:for\b)/,/^(?:var\b)/,/^(?:of\b)/,/^(?:not\b)/,/^(?:,)/,/^(?:\.\.)/,/^(?:\.)/,/^(?::)/,/^(?:;)/,/^(?:and\b)/,/^(?:or\b)/,/^(?:>=)/,/^(?:>)/,/^(?:<-)/,/^(?:<=)/,/^(?:<)/,/^(?:!=)/,/^(?:=>)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:%)/,/^(?:-=)/,/^(?:-)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:_\b)/,/^(?:pairs\b)/,/^(?:in\b)/,/^(?:do\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54],"inclusive":true}}
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
exports.parser = scala_parser;
exports.Parser = scala_parser.Parser;
exports.parse = function () { return scala_parser.parse.apply(scala_parser, arguments); };
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
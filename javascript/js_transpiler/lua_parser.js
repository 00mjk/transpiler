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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,6],$V2=[1,12],$V3=[1,8],$V4=[1,9],$V5=[1,10],$V6=[1,16],$V7=[1,17],$V8=[1,18],$V9=[1,14],$Va=[5,12,62,64],$Vb=[5,9,12,13,16,23,25,26,53,56,57,62,64,65],$Vc=[1,32],$Vd=[1,28],$Ve=[1,27],$Vf=[1,22],$Vg=[1,24],$Vh=[2,45],$Vi=[1,44],$Vj=[1,43],$Vk=[5,9,11,12,13,15,16,19,21,23,25,26,30,32,33,34,35,36,37,38,39,40,41,42,43,44,45,50,51,53,54,56,57,62,64,65],$Vl=[2,46],$Vm=[1,52],$Vn=[1,53],$Vo=[1,54],$Vp=[1,55],$Vq=[1,56],$Vr=[1,57],$Vs=[1,58],$Vt=[1,59],$Vu=[1,60],$Vv=[1,61],$Vw=[1,62],$Vx=[1,63],$Vy=[1,64],$Vz=[1,65],$VA=[5,9,11,12,13,15,16,21,23,25,26,32,33,34,35,36,37,38,39,40,41,42,43,44,45,51,53,54,56,57,62,64,65],$VB=[5,9,11,12,13,15,16,21,23,25,26,30,32,33,34,35,36,37,38,39,40,41,42,43,44,45,51,53,54,56,57,62,64,65],$VC=[2,68],$VD=[1,75],$VE=[21,54],$VF=[15,54],$VG=[1,88],$VH=[1,107],$VI=[2,56],$VJ=[1,117],$VK=[1,119],$VL=[5,9,11,12,13,15,16,21,23,25,26,32,33,34,35,36,37,38,39,51,53,54,56,57,62,64,65],$VM=[5,9,11,12,13,15,16,21,23,25,26,32,33,34,35,36,37,38,39,40,41,42,51,53,54,56,57,62,64,65];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"statement_with_semicolon":8,"while":9,"e":10,"do":11,"end":12,"for":13,"_":14,",":15,"IDENTIFIER":16,"in":17,"pairs":18,"(":19,"dot_expr":20,")":21,"if_statement":22,"function":23,"parameters":24,"return":25,"local":26,"=":27,"identifiers":28,"access_array":29,".":30,"function_call":31,"or":32,"and":33,"<=":34,"<":35,">=":36,"==":37,"~=":38,">":39,"+":40,"-":41,"..":42,"*":43,"/":44,"%":45,"not_expr":46,"!":47,"parentheses_expr":48,"parentheses_expr_":49,"[":50,"]":51,"exprs":52,"{":53,"}":54,"key_values":55,"NUMBER":56,"STRING_LITERAL":57,"type":58,"parameter":59,"types":60,"elif":61,"elseif":62,"else_statement":63,"else":64,"if":65,"key_value":66,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"while",11:"do",12:"end",13:"for",14:"_",15:",",16:"IDENTIFIER",17:"in",18:"pairs",19:"(",21:")",23:"function",25:"return",26:"local",27:"=",30:".",32:"or",33:"and",34:"<=",35:"<",36:">=",37:"==",38:"~=",39:">",40:"+",41:"-",42:"..",43:"*",44:"/",45:"%",47:"!",50:"[",51:"]",53:"{",54:"}",56:"NUMBER",57:"STRING_LITERAL",62:"elseif",64:"else",65:"if"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[6,1],[6,5],[6,12],[6,12],[6,1],[6,7],[8,2],[8,4],[8,2],[8,3],[8,3],[8,3],[8,1],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,2],[10,1],[46,2],[46,1],[20,3],[20,1],[29,4],[31,3],[31,4],[49,2],[49,3],[49,3],[49,1],[49,1],[49,1],[48,6],[48,3],[48,1],[48,1],[48,1],[58,1],[59,1],[24,3],[24,1],[24,0],[52,3],[52,1],[60,3],[60,1],[61,4],[61,3],[61,1],[63,2],[22,5],[22,4],[28,3],[28,1],[55,3],[55,1],[66,3]],
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
case 3: case 37: case 55:
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
this.$ = ["foreach","Object",$$[$0-8],$$[$0-4],$$[$0-1]];
break;
case 8:
this.$ = ["foreach_with_index","Object",$$[$0-10],$$[$0-8],$$[$0-4],$$[$0-1]];
break;
case 10:
this.$ = ["function","public","Object",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 11:
this.$ = ["return",$$[$0]];
break;
case 12:
this.$ = ["initialize_var","Object",$$[$0-2],$$[$0]];
break;
case 13:
this.$ = ["initialize_empty_vars","Object",$$[$0]];
break;
case 14: case 15:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 16:
this.$ = [".",[$$[$0-2]].concat($$[$0])]
break;
case 18:
this.$ = ['||',$$[$0-2],$$[$0]];
break;
case 19:
this.$ = ['&&',$$[$0-2],$$[$0]];
break;
case 20: case 21: case 22: case 23: case 25: case 26: case 27: case 28: case 29: case 30: case 31:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 24:
this.$ = ["!=",$$[$0-2],$$[$0]];
break;
case 32:
this.$ = ["-",$$[$0]];
break;
case 34:
this.$ = ["!", [".",$$[$0]]];
break;
case 35:
this.$ = [".", $$[$0]];
break;
case 36: case 54: case 57: case 59: case 67:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 38:
this.$ = ["access_array",$$[$0-3],[$$[$0-1]]];
break;
case 39:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 40:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 41:
this.$ = ["initializer_list","Object",[]];
break;
case 42:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 43:
this.$ = ["associative_array","Object","Object",$$[$0-1]];
break;
case 44: case 45: case 46:
this.$ = yytext;
break;
case 47:
this.$ = ["anonymous_function","Object",$$[$0-3],$$[$0-1]];
break;
case 48:
this.$ = ["parentheses",$$[$0-1]];
break;
case 53:
this.$ = ["Object", $$[$0]];
break;
case 56:
this.$ = [];
break;
case 58: case 60: case 68: case 70:
this.$ = [$$[$0]];
break;
case 61:
this.$ = ["elif",$$[$0-2],$$[$0-1],$$[$0]]
break;
case 62:
this.$ = ["elif",$$[$0-1],$$[$0]]
break;
case 64:
this.$ = ["else",$$[$0]];
break;
case 65:
this.$ = ["if",$$[$0-3],$$[$0-2],$$[$0-1]];
break;
case 66:
this.$ = ["if",$$[$0-2],$$[$0-1]];
break;
case 69:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 71:
this.$ = [$$[$0-2],$$[$0]]
break;
}
},
table: [{3:1,4:2,6:3,8:4,9:$V0,13:$V1,16:$V2,22:7,23:$V3,25:$V4,26:$V5,29:11,31:13,49:15,53:$V6,56:$V7,57:$V8,65:$V9},{1:[3]},{5:[1,19]},o($Va,[2,3],{6:3,8:4,22:7,29:11,31:13,49:15,4:20,9:$V0,13:$V1,16:$V2,23:$V3,25:$V4,26:$V5,53:$V6,56:$V7,57:$V8,65:$V9}),o($Vb,[2,5]),{10:21,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{14:[1,33],16:[1,34]},o($Vb,[2,9]),{16:[1,35]},{10:36,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{16:[1,37],28:38},{27:[1,39]},o([19,50],$Vh,{27:[1,40],30:[1,41]}),o($Vb,[2,17]),{10:42,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{19:$Vi,50:$Vj},{10:48,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,52:46,53:$V6,54:[1,45],55:47,56:$V7,57:[1,50],66:49},o($Vk,[2,44]),o($Vk,$Vl),{1:[2,1]},o($Va,[2,2]),{11:[1,51],32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz},{10:66,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},o($VA,[2,33]),{16:$Vc,19:$Vd,20:67,23:$Ve,29:29,31:30,48:26,49:31,53:$V6,56:$V7,57:$V8},o($VA,[2,35]),o($VA,[2,37],{30:[1,68]}),{19:[1,69]},{10:70,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},o($VB,[2,49]),o($VB,[2,50]),o($VB,[2,51],{19:$Vi,50:$Vj}),o($Vk,$Vh),{15:[1,71]},{15:[1,72]},{19:[1,73]},o($Vb,[2,11],{32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz}),o($Vb,$VC,{15:$VD,27:[1,74]}),o($Vb,[2,13]),{10:76,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{10:77,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{16:$Vc,19:$Vd,20:78,23:$Ve,29:29,31:30,48:26,49:31,53:$V6,56:$V7,57:$V8},{4:80,6:3,7:79,8:4,9:$V0,13:$V1,16:$V2,22:7,23:$V3,25:$V4,26:$V5,29:11,31:13,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,49:15,53:$V6,56:$V7,57:$V8,65:$V9},{10:81,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{10:48,16:$Vc,19:$Vd,20:25,21:[1,82],23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,52:83,53:$V6,56:$V7,57:$V8},o($Vk,[2,41]),{54:[1,84]},{15:[1,86],54:[1,85]},o($VE,[2,58],{15:[1,87],32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz}),o($VF,[2,70]),o([15,19,30,32,33,34,35,36,37,38,39,40,41,42,43,44,45,50,54],$Vl,{27:$VG}),{4:80,6:3,7:89,8:4,9:$V0,13:$V1,16:$V2,22:7,23:$V3,25:$V4,26:$V5,29:11,31:13,49:15,53:$V6,56:$V7,57:$V8,65:$V9},{10:90,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{10:91,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{10:92,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{10:93,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{10:94,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{10:95,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{10:96,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{10:97,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{10:98,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{10:99,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{10:100,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{10:101,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{10:102,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{10:103,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},o($VA,[2,32]),o($VA,[2,34]),{16:$Vc,19:$Vd,20:104,23:$Ve,29:29,31:30,48:26,49:31,53:$V6,56:$V7,57:$V8},{16:$VH,21:$VI,24:105,59:106},{21:[1,108],32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz},{16:[1,109]},{16:[1,110]},{16:$VH,21:$VI,24:111,59:106},{10:112,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{16:[1,114],28:113},o($Vb,[2,14],{32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz}),o($Vb,[2,15],{32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz}),o($Vb,[2,16]),{12:[1,116],61:115,62:$VJ,63:118,64:$VK},o([12,62,64],[2,4]),{32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,51:[1,120]},o($VB,[2,39]),{21:[1,121]},o($Vk,[2,42]),o($Vk,[2,43]),{57:[1,123],66:122},{10:48,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,52:124,53:$V6,56:$V7,57:$V8},{10:125,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{12:[1,126]},o([5,9,11,12,13,15,16,21,23,25,26,32,51,53,54,56,57,62,64,65],[2,18],{33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz}),o([5,9,11,12,13,15,16,21,23,25,26,32,33,51,53,54,56,57,62,64,65],[2,19],{34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz}),o($VL,[2,20],{40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz}),o($VL,[2,21],{40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz}),o($VL,[2,22],{40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz}),o($VL,[2,23],{40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz}),o($VL,[2,24],{40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz}),o($VL,[2,25],{40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz}),o($VM,[2,26],{43:$Vx,44:$Vy,45:$Vz}),o($VM,[2,27],{43:$Vx,44:$Vy,45:$Vz}),o($VM,[2,28],{43:$Vx,44:$Vy,45:$Vz}),o($VA,[2,29]),o($VA,[2,30]),o($VA,[2,31]),o($VA,[2,36]),{21:[1,127]},{15:[1,128],21:[2,55]},o([15,21],[2,53]),o($VB,[2,48]),{17:[1,129]},{17:[1,130]},{21:[1,131]},o($Vb,[2,12],{32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz}),o($Vb,[2,67]),o($Vb,$VC,{15:$VD}),{12:[1,132]},o($Vb,[2,66]),{10:133,16:$Vc,19:$Vd,20:25,23:$Ve,29:29,31:30,41:$Vf,46:23,47:$Vg,48:26,49:31,53:$V6,56:$V7,57:$V8},{12:[2,63]},{4:80,6:3,7:134,8:4,9:$V0,13:$V1,16:$V2,22:7,23:$V3,25:$V4,26:$V5,29:11,31:13,49:15,53:$V6,56:$V7,57:$V8,65:$V9},o([5,9,11,12,13,15,16,21,23,25,26,27,30,32,33,34,35,36,37,38,39,40,41,42,43,44,45,51,53,54,56,57,62,64,65],[2,38]),o($VB,[2,40]),o($VF,[2,69]),{27:$VG},o($VE,[2,57]),o($VF,[2,71],{32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz}),o($Vb,[2,6]),{4:80,6:3,7:135,8:4,9:$V0,13:$V1,16:$V2,22:7,23:$V3,25:$V4,26:$V5,29:11,31:13,49:15,53:$V6,56:$V7,57:$V8,65:$V9},{16:$VH,21:$VI,24:136,59:106},{18:[1,137]},{18:[1,138]},{4:80,6:3,7:139,8:4,9:$V0,13:$V1,16:$V2,22:7,23:$V3,25:$V4,26:$V5,29:11,31:13,49:15,53:$V6,56:$V7,57:$V8,65:$V9},o($Vb,[2,65]),{4:80,6:3,7:140,8:4,9:$V0,13:$V1,16:$V2,22:7,23:$V3,25:$V4,26:$V5,29:11,31:13,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,49:15,53:$V6,56:$V7,57:$V8,65:$V9},{12:[2,64]},{12:[1,141]},{21:[2,54]},{19:[1,142]},{19:[1,143]},{12:[1,144]},{12:[2,62],61:145,62:$VJ,63:118,64:$VK},o($VB,[2,47]),{16:$Vc,19:$Vd,20:146,23:$Ve,29:29,31:30,48:26,49:31,53:$V6,56:$V7,57:$V8},{16:$Vc,19:$Vd,20:147,23:$Ve,29:29,31:30,48:26,49:31,53:$V6,56:$V7,57:$V8},o($Vb,[2,10]),{12:[2,61]},{21:[1,148]},{21:[1,149]},{11:[1,150]},{11:[1,151]},{4:80,6:3,7:152,8:4,9:$V0,13:$V1,16:$V2,22:7,23:$V3,25:$V4,26:$V5,29:11,31:13,49:15,53:$V6,56:$V7,57:$V8,65:$V9},{4:80,6:3,7:153,8:4,9:$V0,13:$V1,16:$V2,22:7,23:$V3,25:$V4,26:$V5,29:11,31:13,49:15,53:$V6,56:$V7,57:$V8,65:$V9},{12:[1,154]},{12:[1,155]},o($Vb,[2,7]),o($Vb,[2,8])],
defaultActions: {19:[2,1],118:[2,63],134:[2,64],136:[2,54],145:[2,61]},
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
case 1:return 56
break;
case 2:return 57
break;
case 3:return "$"
break;
case 4:return "function"
break;
case 5:return "end"
break;
case 6:return 62
break;
case 7:return 65
break;
case 8:return 64
break;
case 9:return 25
break;
case 10:return 9
break;
case 11:return 13
break;
case 12:return 26
break;
case 13:return 'of'
break;
case 14:return 'not'
break;
case 15:return 15
break;
case 16:return 42
break;
case 17:return 30
break;
case 18:return ':'
break;
case 19:return 33
break;
case 20:return 32
break;
case 21:return 36
break;
case 22:return 39
break;
case 23:return 34
break;
case 24:return 35
break;
case 25:return 38
break;
case 26:return 37
break;
case 27:return 27
break;
case 28:return '*='
break;
case 29:return 43
break;
case 30:return 44
break;
case 31:return 45
break;
case 32:return 41
break;
case 33:return 40
break;
case 34:return '^'
break;
case 35:return 53
break;
case 36:return 54
break;
case 37:return 50
break;
case 38:return 51
break;
case 39:return 19
break;
case 40:return 21
break;
case 41:return 14
break;
case 42:return 18
break;
case 43:return 17
break;
case 44:return 11
break;
case 45:return 16
break;
case 46:return 5
break;
case 47:return 'INVALID'
break;
}
},
rules: [/^(?:(\s+|--.*\n))/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?:function\b)/,/^(?:end\b)/,/^(?:elseif\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:while\b)/,/^(?:for\b)/,/^(?:local\b)/,/^(?:of\b)/,/^(?:not\b)/,/^(?:,)/,/^(?:\.\.)/,/^(?:\.)/,/^(?::)/,/^(?:and\b)/,/^(?:or\b)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:~=)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:_\b)/,/^(?:pairs\b)/,/^(?:in\b)/,/^(?:do\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"inclusive":true}}
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
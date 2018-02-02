/* lexical grammar */
%lex
%%

"\""                  return '"'
"?"                   return '?'
"="                   return '='
"|"                   return '|'
"("                   return '('
")"                   return ')'
[a-zA-Z0-9_][a-zA-Z0-9_]* return 'IDENTIFIER'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex
/* operator associations and precedence */


%start expressions

%% /* language grammar */

expressions
    : statements EOF
        {return $1;}
    ;

statements_: statement {$$ =
 [$1];};
 
statements: statements_ {$$ = ["top_level_statements",$1]};




statement:
    IDENTIFIER '=' '"' grammar_or '"' {[$$ = ["grammar_statement",$1,$4]]};

grammar_or:
    grammar_and "|" grammar_or {$$= ["grammar_or",$1,$3]} | grammar_and;

grammar_and:
    e grammar_and {$$= ["grammar_and",$1,$2]} | e;

e: "(" grammar_or ")" {$$= ["parentheses", $2];} | grammar_var;

grammar_var: IDENTIFIER {$$= ["grammar_var",'"'+$1+'"'];};

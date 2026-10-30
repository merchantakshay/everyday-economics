export function market(demand=0,supply=0){const price=(80+demand-supply)/20; return {price,quantity:20+10*price+supply};}
export function saturday(hours=3,rate=15){return {leisure:hours,work:6-hours,earned:(6-hours)*rate,forgone:hours*rate};}
export function trade(salads=1){const sandwiches=salads*1.5; return {alex:[5-sandwiches,.5+salads],sam:[sandwiches,2-salads],sandwiches};}
export const extraJoy=[10,8,6,4,2,1];
export function utility(slices=3){return {total:extraJoy.slice(0,slices).reduce((a,b)=>a+b,0),marginal:slices?extraJoy[slices-1]:0};}
export function thrift(saving=20){const fraction=saving/100,investment=100; return {income:investment/fraction,spending:investment/fraction-investment,saving:investment};}
export function game(a='normal',b='normal'){return a==='normal'?(b==='normal'?[30,30]:[10,40]):(b==='normal'?[40,10]:[20,20]);}

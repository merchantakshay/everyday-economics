import assert from 'node:assert/strict';
import {market,saturday,trade,utility,thrift,game} from '../dist/models.mjs';
assert.deepEqual(market(),{price:4,quantity:60});
assert.equal(market(20,0).price,5);assert.equal(market(0,20).price,3);
for(let d=-20;d<=20;d+=5)for(let s=-20;s<=20;s+=5){const m=market(d,s);assert.equal(100+d-10*m.price,m.quantity);assert.equal(20+s+10*m.price,m.quantity);}
assert.deepEqual(saturday(3,15),{leisure:3,work:3,earned:45,forgone:45});
// Two cooks each have one hour. Outputs are conserved by exchange, and the default trade makes both better off.
const baseA=[3,1.5],baseB=[1,1];for(let salads=0;salads<=2;salads+=.25){const m=trade(salads);assert.equal(m.alex[0]+m.sam[0],5);assert.equal(m.alex[1]+m.sam[1],2.5);assert(m.alex.every(n=>n>=0)&&m.sam.every(n=>n>=0));}
const m=trade();assert(m.alex[0]>baseA[0]);assert.equal(m.alex[1],baseA[1]);assert(m.sam[0]>baseB[0]);assert.equal(m.sam[1],baseB[1]);
assert.equal(utility(0).total,0);for(let i=1;i<=6;i++){assert(utility(i).total>utility(i-1).total);if(i>1)assert(utility(i).marginal<utility(i-1).marginal);}
for(let s=10;s<=40;s+=5){const m=thrift(s);assert(Math.abs(m.income-m.spending-m.saving)<1e-9);assert.equal(m.saving,100);assert(Math.abs(m.income*s/100-100)<1e-9);}
assert(thrift(30).income<thrift(20).income);
// Discount is strictly dominant, while mutual normal pricing has a higher total payoff.
for(const other of ['normal','discount']){assert(game('discount',other)[0]>game('normal',other)[0]);assert(game(other,'discount')[1]>game(other,'normal')[1]);}
assert(game('normal','normal')[0]>game('discount','discount')[0]);
console.log('Passed: market equilibrium, opportunity cost, feasible mutually beneficial trade, diminishing utility, saving identity, game incentives.');

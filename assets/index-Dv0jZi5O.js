const Ua=`Name,Email,Financial Status,Paid at,Fulfillment Status,Fulfilled at,Accepts Marketing,Currency,Subtotal,Shipping,Taxes,Total,Discount Code,Discount Amount,Shipping Method,Created at,Lineitem quantity,Lineitem name,Lineitem price,Lineitem compare at price,Lineitem sku,Lineitem requires shipping,Lineitem taxable,Lineitem fulfillment status,Billing Name,Billing Street,Billing Address1,Billing Address2,Billing Company,Billing City,Billing Zip,Billing Province,Billing Country,Billing Phone,Shipping Name,Shipping Street,Shipping Address1,Shipping Address2,Shipping Company,Shipping City,Shipping Zip,Shipping Province,Shipping Country,Shipping Phone,Notes,Note Attributes,Cancelled at,Payment Method,Payment Reference,Refunded Amount,Vendor,Outstanding Balance,Employee,Location,Device ID,Id,Tags,Risk Level,Source,Lineitem discount,Tax 1 Name,Tax 1 Value,Tax 2 Name,Tax 2 Value,Tax 3 Name,Tax 3 Value,Tax 4 Name,Tax 4 Value,Tax 5 Name,Tax 5 Value,Phone,Receipt Number,Duties,Billing Province Name,Shipping Province Name,Payment ID,Payment Terms Name,Next Payment Due At,Payment References
#1001,1001@example.com,partially_refunded,,,,,INR,2079.00,0.00,212.32,2079.00,,100.00,Free Shipping,2026-09-02 11:15:04 +0530,1,Cotton Tee - Blue / M,999.00,,TEE-BLU-M,,,,Ravi Kumar,,42 MG Road,,,Pune,'411001,MH,IN,,Ravi Kumar,,42 MG Road,,,Pune,'411001,MH,IN,,,,,Razorpay,,1080.00,,,,,,6100000001,,,web,0.00,,,,,,,,,,,,,,Maharashtra,Maharashtra,,,,
#1001,,,,,,,,,,,,,,,,1,Canvas Tote - Natural,1180.00,,TOTE-NAT,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,100.00,,,,,,,,,,,,,,,,,,,
#1002,1002@example.com,refunded,,,,,INR,1798.20,99.00,90.34,1897.20,SAVE10,199.80,Standard,2026-09-05 18:02:44 +0530,2,Cotton Tee - Blue / M,999.00,,TEE-BLU-M,,,,Asha Rao,,7 Residency Road,,,Bengaluru,'560025,KA,IN,,Asha Rao,,7 Residency Road,,,Bengaluru,'560025,KA,IN,,,,,Razorpay,,1897.20,,,,,,6100000002,,,web,0.00,,,,,,,,,,,,,,Karnataka,Karnataka,,,,
#1003,1003@example.com,partially_refunded,,,,,INR,3598.00,0.00,467.61,3598.00,FLAT400,400.00,Free Shipping,2026-09-08 10:40:12 +0530,1,Wireless Earbuds Pro,2999.00,,EARBUDS-PRO,,,,Neha Gupta,,14 Okhla Phase II,,Bright Retail LLP,New Delhi,'110020,DL,IN,,Neha Gupta,,14 Okhla Phase II,,,New Delhi,'110020,DL,IN,,,,,Razorpay,,2698.95,,,,,,6100000003,,,web,0.00,,,,,,,,,,,,,,Delhi,Delhi,,,,
#1003,,,,,,,,,,,,,,,,1,Cotton Tee - Blue / M,999.00,,TEE-BLU-M,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,0.00,,,,,,,,,,,,,,,,,,,
#1004,1004@example.com,voided,,,,,INR,999.00,0.00,47.57,999.00,,,,2026-09-10 09:12:00 +0530,1,Cotton Tee - Blue / M,999.00,,TEE-BLU-M,,,,Ravi Kumar,,42 MG Road,,,Pune,'411001,MH,IN,,Ravi Kumar,,42 MG Road,,,Pune,'411001,MH,IN,,,,2026-09-10 15:00:00 +0530,Razorpay,,,,,,,,6100000004,,,web,0.00,,,,,,,,,,,,,,Maharashtra,Maharashtra,,,,
#1005,1005@example.com,paid,,,,,INR,1648.00,0.00,125.79,1648.00,,,,2026-09-12 20:30:51 +0530,1,Cotton Tee - Blue / M,999.00,,TEE-BLU-M,,,,Karan Mehta,,3 Ashram Road,,,Ahmedabad,'380009,GJ,IN,,Karan Mehta,,3 Ashram Road,,,Ahmedabad,'380009,GJ,IN,,,,,Razorpay,,,,,,,,6100000005,,,web,0.00,,,,,,,,,,,,,,Gujarat,Gujarat,,,,
#1005,,,,,,,,,,,,,,,,1,Scented Candle - Lavender,649.00,,CANDLE-LAV,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,0.00,,,,,,,,,,,,,,,,,,,
#1006,1006@example.com,partially_refunded,,,,,INR,1998.00,0.00,95.14,1998.00,,,,2026-09-15 13:05:09 +0530,2,Cotton Tee - Blue / M,999.00,,TEE-BLU-M,,,,Ravi Kumar,,42 MG Road,,,Pune,'411001,MH,IN,,Ravi Kumar,,42 MG Road,,,Pune,'411001,MH,IN,,,,,Razorpay,,999.00,,,,,,6100000006,,,web,0.00,,,,,,,,,,,,,,Maharashtra,Maharashtra,,,,
#1007,1007@example.com,paid,,,,,INR,1180.00,0.00,180.00,1180.00,,,,2026-09-18 22:47:30 +0530,1,Canvas Tote - Natural,1180.00,,TOTE-NAT,,,,Priya Shah,,221 W 48th St,,,New York,'10036,NY,US,,Priya Shah,,221 W 48th St,,,New York,'10036,NY,US,,,,,Razorpay,,,,,,,,6100000007,,,web,0.00,,,,,,,,,,,,,,New York,New York,,,,
#1008,1008@example.com,paid,,,,,INR,999.00,0.00,47.57,999.00,,,,2026-09-20 08:15:00 +0530,1,Cotton Tee - Blue / M,999.00,,TEE-BLU-M,,,,Imran Khan,,"House 9, Sector 5",,,Gurugram,'122001,,IN,,,,,,,,,,,,,,,Razorpay,,,,,,,,6100000008,,,web,0.00,,,,,,,,,,,,,,,,,,,
#0999,0999@example.com,paid,,,,,INR,999.00,0.00,47.57,999.00,,,,2026-08-30 17:00:00 +0530,1,Cotton Tee - Blue / M,999.00,,TEE-BLU-M,,,,Ravi Kumar,,42 MG Road,,,Pune,'411001,MH,IN,,Ravi Kumar,,42 MG Road,,,Pune,'411001,MH,IN,,,,,Razorpay,,,,,,,,6099999999,,,web,0.00,,,,,,,,,,,,,,Maharashtra,Maharashtra,,,,
#1010,1010@example.com,partially_refunded,,,,,INR,2997.00,49.00,145.05,3046.00,,,Express,2026-09-25 16:20:00 +0530,3,Cotton Tee - Blue / M,999.00,,TEE-BLU-M,,,,Lakshmi Iyer,,12 Anna Salai,,,Chennai,'600002,TN,IN,,Lakshmi Iyer,,12 Anna Salai,,,Chennai,'600002,TN,IN,,,,,Razorpay,,49.00,,,,,,6100000010,,,web,0.00,,,,,,,,,,,,,,Tamil Nadu,Tamil Nadu,,,,
`,Fa=`sku,title,hsn,gst_rate,supply_type
TEE-BLU-M,Cotton Tee - Blue / M,61091000,5,
TOTE-NAT,Canvas Tote - Natural,42022210,18,
EARBUDS-PRO,Wireless Earbuds Pro,85183000,18,
,Gift Wrap,48239090,18,
`,qa=`order,date,item,quantity,amount,refund_id
#1002,2026-09-12,,,1897.20,
#1003,2026-09-15,EARBUDS-PRO,1,,
#1006,2026-09-21,TEE-BLU-M,1,,
#1001,2026-09-10,,,1080.00,
`,Ha=`order,gstin
#1003,07AAACB1234C1Z5
`,za="acme-retail.myshopify.com",ja="Acme Retail Private Limited",Ya="Acme Store",Wa="27AAPFU0939F1ZV";const Ja="Unit 7, Andheri Industrial Estate",Ka="Mumbai",Xa="400053",Za="billing@acme.example",Qa="Acme Retail Private Limited",es={shop:za,legalName:ja,tradeName:Ya,gstin:Wa,stateCode:"27",addressLine1:Ja,location:Ka,pincode:Xa,email:Za,tallyCompanyName:Qa};class lt extends Error{line;constructor(t,n){super(`CSV line ${t}: ${n}`),this.name="CsvParseError",this.line=t}}function tt(e){const t=e.charCodeAt(0)===65279?e.slice(1):e,n=[];let s=[],o="",a=!1,i=!1,l=1,r=1;const d=()=>{s.push(o),o="",i=!1},c=()=>{d(),s.length===1&&s[0]===""||n.push(s),s=[]};for(let u=0;u<t.length;u++){const h=t[u];if(a){h==='"'?t[u+1]==='"'?(o+='"',u++):a=!1:((h===`
`||h==="\r"&&t[u+1]!==`
`)&&l++,o+=h);continue}if(h==='"'){if(o!==""||i)throw new lt(l,"a quote may only open a field, not appear inside one");a=!0,i=!0,r=l}else if(h===",")d();else if(h==="\r"||h===`
`)h==="\r"&&t[u+1]===`
`&&u++,c(),l++;else{if(i)throw new lt(l,"unexpected text after a closing quote");o+=h}}if(a)throw new lt(r,"quoted field is never closed");return(o!==""||i||s.length>0)&&c(),n}const ts=/^[-+]?\d+(\.\d+)?$/,ns=/^[=+\-@\t\r]/;function as(e){if(e==null)return"";let t=typeof e=="number"?String(e):e;return typeof e=="string"&&ns.test(t)&&!ts.test(t)&&(t=`'${t}`),/[",\r\n]/.test(t)||t!==t.trim()?`"${t.replace(/"/g,'""')}"`:t}function F(e){return e.map(t=>t.map(as).join(",")).join(`\r
`)+`\r
`}const Dt={NIL_RATED:"nil-rated",EXEMPT:"exempt",NON_GST:"non-gst"};function ss(e){const t=e.trim().toLowerCase().replace(/[\s_-]+/g,"");return t===""||t==="taxable"?{}:t==="nil"||t==="nilrated"?{nonTaxable:"NIL_RATED"}:t==="exempt"||t==="exempted"?{nonTaxable:"EXEMPT"}:t==="nongst"?{nonTaxable:"NON_GST"}:{problem:`supply_type ${JSON.stringify(e.trim())} is not one of taxable, nil-rated, exempt, non-gst`}}class Oe extends Error{problems;constructor(t){super(`catalogue: ${t.length} problem(s)
  - ${t.join(`
  - `)}`),this.name="CatalogueError",this.problems=t}}const os=/^(\d{4}|\d{6}|\d{8})$/,Xt=40;function rs(e,t,n=""){const s=e.trim().replace(/\s/g,""),o=t.trim().replace(/%$/,"");if(!os.test(s))return{problem:`hsn ${JSON.stringify(s)} is not a 4, 6 or 8 digit code`};const a=ss(n);if("problem"in a)return a;if(a.nonTaxable)return o!==""&&Number(o)!==0?{problem:`a ${Dt[a.nonTaxable]} product carries no GST, so gst_rate must be 0 or blank (got ${JSON.stringify(o)})`}:{entry:{hsn:s,gstRate:0,nonTaxable:a.nonTaxable}};const i=Number(o);return o===""||!Number.isFinite(i)||i<0||i>Xt?{problem:`gst_rate ${JSON.stringify(o)} is not a percentage between 0 and ${Xt}`}:i===0?{problem:"gst_rate 0 needs a supply_type of nil-rated, exempt or non-gst: a 0% rate alone does not say which, and GSTR-1 reports them apart (Table 8)"}:{entry:{hsn:s,gstRate:i}}}function Mt(e){return e.replace(/^'(?=[=+\-@])/,"")}function Wn(e){return Mt(e.trim()).toLowerCase().replace(/\s+/g," ")}function Jn(e){return Mt(e.trim()).toUpperCase()}function Ne(e,t){return e==="sku"?Jn(t):Wn(t)}class is{bySku=new Map;byTitle=new Map;written=[];get size(){return this.bySku.size+this.byTitle.size}lookup(t){if(t.sku){const n=this.bySku.get(Jn(t.sku));if(n)return n}if(t.title)return this.byTitle.get(Wn(t.title))}rows(){return this.written.map(t=>({...t}))}add(t,n,s){const o=t==="sku"?this.bySku:this.byTitle,a=Ne(t,n),i=o.get(a);return i||(o.set(a,s),this.written.push({kind:t,label:Mt(n.trim()),...s})),i}}function Zt(e){return`${e.hsn} @ ${e.nonTaxable?Dt[e.nonTaxable]:`${e.gstRate}%`}`}function Kn(e){const t=tt(e);if(t.length===0)throw new Oe(["the file is empty"]);const n=t[0].map(u=>u.trim().toLowerCase().replace(/[\s-]+/g,"_")),s=u=>n.indexOf(u),o=s("sku"),a=s("title"),i=s("hsn"),l=s("gst_rate"),r=s("supply_type"),d=[];if(i<0&&d.push('missing column "hsn"'),l<0&&d.push('missing column "gst_rate"'),o<0&&a<0&&d.push('needs a "sku" or a "title" column'),d.length>0)throw new Oe(d);const c=new is;for(let u=1;u<t.length;u++){const h=t[u],f=u+1,w=(h[o]??"").trim(),x=(h[a]??"").trim();if(!w&&!x){d.push(`row ${f}: has neither a sku nor a title`);continue}const y=w?`SKU ${w}`:`"${x}"`,N=rs(h[i]??"",h[l]??"",r<0?"":h[r]??"");if("problem"in N){d.push(`row ${f} (${y}): ${N.problem}`);continue}const{entry:b}=N,E=w?c.add("sku",w,b):c.add("title",x,b);E&&(E.hsn!==b.hsn||E.gstRate!==b.gstRate||E.nonTaxable!==b.nonTaxable)&&d.push(`row ${f} (${y}): listed again with a different hsn/rate (${Zt(E)} vs ${Zt(b)})`)}if(d.length>0)throw new Oe(d);return c}function ls(e){const t=e.split("-");if(t.length!==3)throw new Error(`financialYear: expected ISO date "YYYY-MM-DD", got "${e}"`);const[n,s,o]=t;if(!/^\d{4}$/.test(n)||!/^\d{2}$/.test(s)||!/^\d{2}$/.test(o))throw new Error(`financialYear: expected ISO date "YYYY-MM-DD", got "${e}"`);const a=Number(n),i=Number(s);if(i<1||i>12)throw new Error(`financialYear: month out of range in "${e}"`);const l=i>=4?a:a-1,r=String((l+1)%100).padStart(2,"0");return`${l}-${r}`}class cs{counters;constructor(t){this.counters=new Map(t)}get(t){return this.counters.get(t)}set(t,n){this.counters.set(t,n)}entries(){return[...this.counters.entries()]}}const ds="INV",Xn=4,Zn="/";function us(e){const t=e.shop?.trim();if(!t)throw new Error("invoice series: `shop` is required — an invoice counter shared across tenants produces gaps in each merchant's series and breaches Rule 46(b)");return{shop:t,prefix:e.prefix??ds,pad:e.pad??Xn,separator:e.separator??Zn,store:e.store}}function ps(e,t,n){return`${e}|${t}|${n}`}function ms(e,t,n,s={}){const o=s.separator??Zn;return`${e}${o}${t}${o}${String(n).padStart(s.pad??Xn,"0")}`}function hs(e,t,n){return ms(e.prefix,t,n,e)}function Qn(e,t){const n=us(t),s=ls(e),o=ps(n.shop,n.prefix,s),a=n.store.get(o)??0,i=a+1;return n.store.set(o,i),{documentNumber:hs(n,s,i),counter:i,rollback:()=>{n.store.get(o)===i&&n.store.set(o,a)}}}class De{rows=new Map;constructor(t){for(const n of t??[])this.save(n)}static key(t,n){return`${t}|${n}`}find(t,n){return this.rows.get(De.key(t,n))}save(t){this.rows.set(De.key(t.shop,t.orderId),structuredClone(t))}againstInvoice(t,n){return this.all().filter(s=>s.shop===t&&s.originalDocumentNumber===n)}all(){return[...this.rows.values()]}get size(){return this.rows.size}}function fs(e,t){return{seriesStore:new cs,register:new De,creditNoteRegister:new De}}const gs="96",vs="IN",Qt="9999",en=18,bs=Object.freeze({AN:"35",AP:"37",AR:"12",AS:"18",BR:"10",CH:"04",CT:"22",CG:"22",DL:"07",DN:"26",DD:"25",GA:"30",GJ:"24",HR:"06",HP:"02",JK:"01",JH:"20",KA:"29",KL:"32",LA:"38",LD:"31",MP:"23",MH:"27",MN:"14",ML:"17",MZ:"15",NL:"13",OR:"21",OD:"21",PY:"34",PB:"03",RJ:"08",SK:"11",TN:"33",TG:"36",TS:"36",TR:"16",UP:"09",UT:"05",UK:"05",WB:"19"});function tn(e){return"stateCode"in e}function nn(e){const t=e?.country_code?.trim().toUpperCase();if(t&&t!==vs)return{stateCode:gs,foreign:!0};const n=e?.province_code?.trim().toUpperCase();if(!n)return{unresolved:"address has no province_code, so the place of supply (which state receives the tax) cannot be determined — resolve it from the PIN code or flag the order for manual review"};const s=bs[n];return s?{stateCode:s,foreign:!1}:{unresolved:`province_code "${n}" is not an ISO 3166-2:IN subdivision, so it maps to no GST state`}}function ea(e){return Number.isFinite(e)?Math.round((e+1e-8)*100)/100:0}function Lt(e){if(e==null)return 0;const t=parseFloat(e);return Number.isFinite(t)?t:0}function ys(e){return!e||e.length===0?0:e.reduce((t,n)=>t+Lt(n.amount),0)}function ta(e){const t=Lt(e.total_discount),n=ys(e.discount_allocations);return ea(Math.max(t,n,0))}function Ts(e){if(!e||e.length===0)return 0;const t=e.reduce((n,s)=>{const o=Lt(s.price)-ta(s);return n+Math.max(o,0)},0);return ea(t)}function ws(e,t,n){const s=e?.name?.trim()||[e?.first_name,e?.last_name].filter(Boolean).join(" ").trim();if(s)return s;const o=[t?.first_name,t?.last_name].filter(Boolean).join(" ").trim();return o||n}class Ce extends Error{orderId;field;constructor(t,n,s,o=`shopifyOrderToOrder: order ${t} cannot be mapped`){super(`${o} — ${n}: ${s}`),this.name="UnmappableOrderError",this.orderId=t,this.field=n}}function an(e,t){const n=e?.company?.trim(),s=t.gstin&&n?n:ws(e,t.customer,t.fallbackName),o={legalName:s,stateCode:t.stateCode,addressLine1:e?.address1?.trim()||"",location:e?.city?.trim()||"",pincode:e?.zip?.trim()||""};t.gstin&&(o.gstin=t.gstin),n&&n!==s&&(o.tradeName=n),e?.address2?.trim()&&(o.addressLine2=e.address2.trim());const a=e?.phone?.trim()||t.customer?.phone?.trim();a&&(o.phone=a);const i=t.email?.trim()||t.customer?.email?.trim();return i&&(o.email=i),o}function Ns(e,t){const n=String(e.id),s=e.line_items.map(u=>{const h=t.hsnFor?.(u),f=t.gstRateFor?.(u);{if(h==null||h==="")throw new Ce(n,`line_items[${u.id}].hsn`,`no HSN/SAC resolved for this line — supply an \`hsnFor\` resolver from the product catalogue. Refusing to declare the placeholder HSN "${Qt}" on a tax invoice`);if(f==null||!Number.isFinite(f))throw new Ce(n,`line_items[${u.id}].gstRate`,`no GST rate resolved for this line — supply a \`gstRateFor\` resolver from the product catalogue. Refusing to assume ${en}%, which is silently wrong for every 0/5/12/28% item`)}const w={id:String(u.id),description:u.title||u.name||u.sku||"Item",hsn:h||Qt,quantity:Number(u.quantity),unitPrice:parseFloat(u.price),discount:ta(u),gstRate:f??en,unit:"NOS"},x=t.supplyTypeFor?.(u);return x&&(w.nonTaxable=x),w.hsn.startsWith("99")&&(w.isService=!0),w}),o=nn(e.billing_address);if(!tn(o))throw new Ce(n,"billing_address",o.unresolved);const a=an(e.billing_address,{stateCode:o.stateCode,gstin:t.buyerGstin,customer:e.customer,email:e.email,fallbackName:"Consumer"});let i=a,l=o;if(e.shipping_address){const u=nn(e.shipping_address);if(!tn(u))throw new Ce(n,"shipping_address",u.unresolved);l=u,i=an(e.shipping_address,{stateCode:u.stateCode,gstin:t.buyerGstin,customer:e.customer,email:e.email,fallbackName:a.legalName})}const r=Ts(e.shipping_lines),d=e.name??(e.order_number!=null?`#${e.order_number}`:`#${e.id}`),c={orderId:n,orderNumber:d,orderDate:e.created_at.slice(0,10),seller:t.seller,buyer:a,shipTo:i,lineItems:s,currency:e.currency||"INR",documentType:"INVOICE"};return r>0&&(c.shippingCharge=r),(t.pricesIncludeTax??e.taxes_included??!1)&&(c.pricesIncludeTax=!0),l.foreign&&(c.isExport=!0,t.exportWithoutPaymentOfTax&&(c.exportWithoutPaymentOfTax=!0)),c}const xs=1;class na extends Error{orderId;result;constructor(t,n){super(`order ${t} does not reconcile with Shopify: ${n.message??"unknown mismatch"}`),this.name="OrderTotalMismatchError",this.orderId=t,this.result=n}}function Ss(e,t,n={}){const s=n.tolerance??xs,o=e.totals.grandTotal,a=t.total_price,i=a==null?NaN:parseFloat(a);if(a==null||!Number.isFinite(i))return{checked:!1,ok:!0,computedTotal:o,difference:0,tolerance:s};const l=Math.round((o-i+1e-8)*100)/100,r=Math.abs(l)<=s,d={checked:!0,ok:r,expectedTotal:i,computedTotal:o,difference:l,tolerance:s};return r||(d.message=`computed grand total ₹${o.toFixed(2)} differs from Shopify total_price ₹${i.toFixed(2)} by ₹${l.toFixed(2)} (tolerance ₹${s.toFixed(2)}). Likely causes: a discount not carried into the invoice, a mis-resolved place of supply, prices that include GST read as pre-tax (or the reverse — check the pricesIncludeTax setting), or a wrong GST rate from the catalogue. Refusing to issue an invoice for a total the customer was never charged.`),d}function $s(e,t,n={}){const s=Ss(e,t,n);if(!s.ok)throw new na(String(t.id),s);return s}class Ge extends Error{constructor(t){super(`Shopify order export: ${t}`),this.name="ShopifyCsvFormatError"}}const Es=["Name","Created at","Subtotal","Shipping","Total","Lineitem quantity","Lineitem name","Lineitem price","Billing Province","Billing Country"];function ct(e){return e.trim().toLowerCase().replace(/\s+/g," ")}function dt(e){if(e==null)return;const t=e.trim().replace(/[₹,\s]/g,"").replace(/^INR/i,"");if(t!=="")return/^-?\d+(\.\d+)?$/.test(t)?Number(t):NaN}function se(e){return(e<0?-1:1)*Math.round(Math.abs(e)*100+1e-8)/100}function Rs(e){return e.trim().replace(/^'/,"")}function Cs(e){const t=e.trim();if(t)return/^[A-Za-z]{2}$/.test(t)?t.toUpperCase():t.toLowerCase()==="india"?"IN":t}function aa(e){let t;try{t=tt(e)}catch(r){throw new Ge(r.message)}if(t.length===0)throw new Ge("the file is empty");const n=t[0].map(ct),s=new Map;n.forEach((r,d)=>{s.has(r)||s.set(r,d)});const o=Es.filter(r=>!s.has(ct(r)));if(o.length>0)throw new Ge(`missing column(s) ${o.map(r=>`"${r}"`).join(", ")}. Export from Shopify admin with Orders -> Export -> "Plain CSV file", and do not delete columns.`);const a=(r,...d)=>{for(const c of d){const u=s.get(ct(c));if(u!==void 0&&r[u]!=null)return r[u]}return""},i=new Map;let l;for(let r=1;r<t.length;r++){const d=t[r],c=a(d,"Name").trim()||l;if(!c)throw new Ge(`row ${r+1} has no order Name and follows no order`);l=c;let u=i.get(c);u||(u={rows:[],lines:[]},i.set(c,u)),u.rows.push(d),u.lines.push(r+1)}return[...i.entries()].map(([r,d])=>Is(r,d,a))}function Is(e,t,n){const s=[],o=(...m)=>{for(const p of t.rows){const $=n(p,...m).trim();if($)return $}return""},a=(m,p)=>{const $=dt(o(m));return $===void 0?(p&&s.push(`"${m}" is blank`),0):Number.isNaN($)?(s.push(`"${m}" is not a number (${JSON.stringify(o(m))})`),0):$},i=a("Subtotal",!0),l=a("Shipping",!1),r=a("Taxes",!1),d=a("Total",!0),c=a("Refunded Amount",!1),u=o("Created at");/^\d{4}-\d{2}-\d{2}/.test(u)||s.push(`"Created at" is not a date (${JSON.stringify(u)})`);const h=[];t.rows.forEach((m,p)=>{const $=n(m,"Lineitem name").trim(),I=n(m,"Lineitem quantity").trim();if(!$&&!I)return;const k=`line ${p+1} (CSV row ${t.lines[p]})`,D=Number(I);(!Number.isInteger(D)||D<=0)&&s.push(`${k}: quantity ${JSON.stringify(I)} is not a positive whole number`);const M=dt(n(m,"Lineitem price"));(M===void 0||Number.isNaN(M)||M<0)&&s.push(`${k}: price ${JSON.stringify(n(m,"Lineitem price"))} is not a valid amount`);const _=dt(n(m,"Lineitem discount"))??0;(Number.isNaN(_)||_<0)&&s.push(`${k}: discount ${JSON.stringify(n(m,"Lineitem discount"))} is not a valid amount`),h.push({title:$||n(m,"Lineitem sku").trim()||"Item",sku:n(m,"Lineitem sku").trim(),quantity:Number.isFinite(D)?D:0,price:M!==void 0&&Number.isFinite(M)?M:0,lineDiscount:Number.isFinite(_)?_:0})}),h.length===0&&s.push("the order has no line items");const f=h.map(m=>m.lineDiscount);if(s.length===0){const m=h.map(k=>se(k.quantity*k.price)),p=se(m.reduce((k,D)=>k+D,0)),$=se(f.reduce((k,D)=>k+D,0)),I=se(p-i-$);if(I<-.01)s.push(`line discounts (₹${$.toFixed(2)}) exceed the discount implied by Subtotal (₹${se(p-i).toFixed(2)}); the export's discount columns do not add up`);else if(I>.005){const k=m.map((M,_)=>Math.max(se(M-f[_]),0)),D=k.reduce((M,_)=>M+_,0);if(D<=0)s.push(`an order discount of ₹${I.toFixed(2)} has no line value to apply to`);else{const M=k.map(V=>se(I*V/D));let _=0;k.forEach((V,G)=>{V>k[_]&&(_=G)}),M[_]=se(M[_]+I-M.reduce((V,G)=>V+G,0)),M.forEach((V,G)=>{f[G]=se(f[G]+V),f[G]>m[G]+.005&&s.push(`line ${G+1}: allocated discount ₹${f[G].toFixed(2)} exceeds its value ₹${m[G].toFixed(2)}`)})}}}const w=h.map((m,p)=>{const $={id:`${e}:${p+1}`,title:m.title,quantity:m.quantity,price:m.price.toFixed(2),total_discount:se(f[p]).toFixed(2)};return m.sku&&($.sku=m.sku),$}),x=m=>{const p=k=>o(`${m} ${k}`),$={},I=(k,D)=>{D&&($[k]=D)};return I("name",p("Name")),I("company",p("Company")),I("address1",p("Address1")||p("Street")),I("address2",p("Address2")),I("city",p("City")),I("province_code",p("Province").toUpperCase()),I("province",p("Province Name")),I("country_code",Cs(p("Country"))),I("zip",Rs(p("Zip"))),I("phone",p("Phone")),Object.keys($).length>0?$:void 0},y=x("Billing"),N=x("Shipping"),b={id:o("Id")||e,name:e,created_at:u,line_items:w,total_price:d.toFixed(2)},E=o("Currency");E&&(b.currency=E.toUpperCase()),y&&(b.billing_address=y),N&&(b.shipping_address=N);const C=o("Email");C&&(b.email=C),l>0&&(b.shipping_lines=[{title:o("Shipping Method")||"Shipping",price:l.toFixed(2)}]);const A={name:e,rows:t.lines,payload:b,refundedAmount:c,exported:{subtotal:i,shipping:l,taxes:r,total:d},problems:s},g=o("Cancelled at","Canceled at");g&&(A.cancelledAt=g);const T=o("Financial Status");return T&&(A.financialStatus=T),A}const sa=Object.freeze({"01":"Jammu and Kashmir","02":"Himachal Pradesh","03":"Punjab","04":"Chandigarh","05":"Uttarakhand","06":"Haryana","07":"Delhi","08":"Rajasthan","09":"Uttar Pradesh",10:"Bihar",11:"Sikkim",12:"Arunachal Pradesh",13:"Nagaland",14:"Manipur",15:"Mizoram",16:"Tripura",17:"Meghalaya",18:"Assam",19:"West Bengal",20:"Jharkhand",21:"Odisha",22:"Chhattisgarh",23:"Madhya Pradesh",24:"Gujarat",25:"Daman and Diu",26:"Dadra and Nagar Haveli and Daman and Diu",27:"Maharashtra",28:"Andhra Pradesh (Before Division)",29:"Karnataka",30:"Goa",31:"Lakshadweep",32:"Kerala",33:"Tamil Nadu",34:"Puducherry",35:"Andaman and Nicobar Islands",36:"Telangana",37:"Andhra Pradesh",38:"Ladakh",96:"Foreign Country",97:"Other Territory",99:"Centre Jurisdiction"});function We(e){return e?Object.prototype.hasOwnProperty.call(sa,e):!1}function Le(e){return sa[e]}const Os=1e-8;function oa(e,t=2){if(!Number.isFinite(e))return 0;const n=Math.pow(10,t),s=e<0?-1:1,o=Math.abs(e)*n,a=Math.round(o+Os);return s*a/n}function R(e){return oa(e,2)}function ra(e){return oa(e,0)}function O(e){return R(e.reduce((t,n)=>t+n,0))}function v(e){return R(e).toFixed(2)}const As=18,ks="9965",ia="INR",Ds=/^[A-Z]{3}$/;class yt extends Error{orderId;currency;constructor(t,n,s){super(`computeInvoice: order ${t} is priced in ${JSON.stringify(n)} — ${s}`),this.name="UnsupportedCurrencyError",this.orderId=t,this.currency=n}}function Ms(e,t){if(!Ds.test(e))throw new yt(t,e,'not a well-formed ISO 4217 alphabetic code (expected three uppercase letters, e.g. "INR")');if(e!==ia)throw new yt(t,e,"this library computes GST in INR only and performs NO currency conversion. Every downstream artefact (GSTR-1 rows, Tally ledgers, amount-in-words, the rupee round-off) would silently treat the foreign amounts as rupees, and the total_price reconciliation cannot catch it because both sides are in the same foreign currency. Convert to INR at the Rule 34 notified rate before calling.")}function Ls(e,t){let n,s=-1/0;for(const o of e){const a=o.quantity*o.unitPrice-(o.discount??0),i=t?a/_t(o):a;i>s&&(s=i,n=o)}return n}function Ps(e){const t=e.currency??ia;Ms(t,e.orderId);const n=e.documentType??"INVOICE",s=e.reverseCharge??!1,o=e.pricesIncludeTax??!1,a=e.shipTo??e.buyer,i=a.stateCode;if(!We(e.seller.stateCode))throw new Error(`computeInvoice: invalid seller GST state code ${JSON.stringify(e.seller.stateCode)} (order ${e.orderId})`);if(!We(i))throw new Error(`computeInvoice: invalid place-of-supply (ship-to) GST state code ${JSON.stringify(i)} (order ${e.orderId})`);const l=e.seller.stateCode===i?"INTRA_STATE":"INTER_STATE",r=e.buyer.gstin?"B2B":"B2C",d=[...e.lineItems],c=e.shippingCharge??0;if(c>0){const p=Ls(e.lineItems,o);d.push({id:"shipping",description:"Shipping & Handling",hsn:e.shippingHsn??p?.hsn??ks,quantity:1,unitPrice:c,gstRate:e.shippingGstRate??p?.gstRate??As,unit:"NOS",isService:p?p.isService??!1:!0,...e.shippingGstRate===void 0&&p?.nonTaxable?{nonTaxable:p.nonTaxable}:{}})}const u=(e.isExport??!1)&&(e.exportWithoutPaymentOfTax??!1),f=(u?d.map(p=>({...p,gstRate:0,cessRate:0})):d).map((p,$)=>Bs(p,$+1,l,o)),w=O(f.map(p=>p.taxableValue)),x=O(f.map(p=>p.discount)),y=O(f.map(p=>p.cgstAmount)),N=O(f.map(p=>p.sgstAmount)),b=O(f.map(p=>p.igstAmount)),E=O(f.map(p=>p.cessAmount)),C=O(f.map(p=>p.totalTax)),A=R(w+C),g=ra(A),T=R(g-A),m={totalTaxableValue:w,totalDiscount:x,shippingCharge:f.find(p=>p.id==="shipping")?.taxableValue??0,totalCgst:y,totalSgst:N,totalIgst:b,totalCess:E,totalTax:C,grandTotalBeforeRound:A,roundOff:T,grandTotal:g};return{documentType:n,documentNumber:void 0,documentDate:e.orderDate,supplyType:r,taxSplit:l,placeOfSupply:i,reverseCharge:s,isExport:e.isExport??!1,exportWithoutPaymentOfTax:u,currency:t,seller:e.seller,buyer:e.buyer,shipTo:a,items:f,totals:m}}function Pt(e,t,n){let s=0,o=0,a=0,i=0,l=0,r=0;n==="INTRA_STATE"?(s=t.gstRate/2,o=t.gstRate/2,i=R(e*s/100),l=R(e*o/100)):(a=t.gstRate,r=R(e*t.gstRate/100));const d=t.cessRate??0,c=R(e*d/100),u=R(i+l+r+c);return{cgstRate:s,cgstAmount:i,sgstRate:o,sgstAmount:l,igstRate:a,igstAmount:r,cessRate:d,cessAmount:c,totalTax:u}}function _t(e){return 1+(e.gstRate+(e.cessRate??0))/100}function la(e,t,n){const s=R(e/_t(t)),o=Math.round(e*100);let a=s,i=1/0;for(let l=-3;l<=3;l++){const r=R(s+l/100);if(r<0)continue;const d=Math.round((r+Pt(r,t,n).totalTax)*100),c=Math.abs(d-o);c<=i&&(a=r,i=c)}return a}function _s(e,t){const n=R(e.quantity*e.unitPrice),s=R(e.discount??0);return ca(e,t,s,n),{unitPrice:e.unitPrice,grossAmount:n,discount:s,taxableValue:R(n-s)}}function Gs(e,t,n){const s=R(e.quantity*e.unitPrice),o=R(e.discount??0);ca(e,t,o,s);const a=la(R(s-o),e,n),i=o===0?a:Math.max(R(s/_t(e)),a);return{unitPrice:R(i/e.quantity),grossAmount:i,discount:R(i-a),taxableValue:a}}function ca(e,t,n,s){if(n>s)throw new Error(`computeInvoice: line ${t} (${e.id}) discount ${n} exceeds gross amount ${s}`)}function Bs(e,t,n,s){Vs(e,t);const{unitPrice:o,grossAmount:a,discount:i,taxableValue:l}=s?Gs(e,t,n):_s(e,t),r=Pt(l,e,n),d=R(l+r.totalTax);return{id:e.id,slNo:t,description:e.description,hsn:e.hsn,quantity:e.quantity,unit:e.unit??"NOS",unitPrice:o,isService:e.isService??!1,grossAmount:a,discount:i,taxableValue:l,gstRate:e.gstRate,...r,lineTotal:d,...e.nonTaxable?{nonTaxable:e.nonTaxable}:{}}}function Vs(e,t){const n=[];if((!Number.isFinite(e.quantity)||e.quantity<=0)&&n.push(`quantity must be a finite number > 0 (got ${e.quantity})`),(!Number.isFinite(e.unitPrice)||e.unitPrice<0)&&n.push(`unitPrice must be a finite number >= 0 (got ${e.unitPrice})`),(!Number.isFinite(e.gstRate)||e.gstRate<0)&&n.push(`gstRate must be a finite number >= 0 (got ${e.gstRate})`),e.nonTaxable&&(e.gstRate!==0||(e.cessRate??0)!==0)&&n.push(`a ${e.nonTaxable} line carries no GST, but has gstRate ${e.gstRate} / cessRate ${e.cessRate??0}`),n.length>0)throw new Error(`computeInvoice: line ${t} (${e.id}) is invalid — ${n.join("; ")}`)}class j extends Error{reason;constructor(t,n){super(`credit note: ${n}`),this.name="CreditNoteError",this.reason=t}}const da=/^(\d{4})-(\d{2})-(\d{2})$/;function Us(e){const t=da.exec(e);if(!t)throw new j("invalid",`original date ${JSON.stringify(e)} is not YYYY-MM-DD`);const n=Number(t[1]);return`${Number(t[2])>=4?n+1:n}-11-30`}function Fs(e,t){return{date:t,lines:e.items.map(n=>({lineId:n.id,quantity:n.quantity,amount:n.lineTotal}))}}const qs=1;function Hs(e,t,n,s=new Map){if([...s.values()].reduce((u,h)=>u+h,0)===0&&Math.abs(t-e.totals.grandTotalBeforeRound)<=qs)return{request:Fs(e,n)};if(new Set(e.items.map(u=>`${u.gstRate}|${u.cessRate}|${u.hsn}`)).size!==1)return{refused:"mixed-rates",message:`₹${t.toFixed(2)} refunded with no item breakdown, on an invoice whose lines differ in GST rate or HSN — the items refunded are needed to know which tax to reverse`};const i=e.items.map(u=>Math.max(R(u.lineTotal-(s.get(u.id)??0)),0)),l=R(i.reduce((u,h)=>u+h,0));if(t>l+.005)return{refused:"exceeds",message:`₹${t.toFixed(2)} refunded but only ₹${l.toFixed(2)} of invoice ${e.documentNumber??""} is left to credit`};const r=i.map(u=>R(t*u/l));let d=0;i.forEach((u,h)=>{u>i[d]&&(d=h)}),r[d]=R(r[d]+t-r.reduce((u,h)=>u+h,0));const c=[];return e.items.forEach((u,h)=>{r[h]>0&&c.push({lineId:u.id,amount:Math.min(r[h],i[h])})}),{request:{date:n,lines:c}}}function zs(e,t,n={}){if(e.documentType!=="INVOICE")throw new j("invalid","a credit note can only be issued against a tax invoice");const s=e.documentNumber;if(!s)throw new j("invalid","the original invoice has no number yet");if(!da.test(t.date))throw new j("invalid",`date ${JSON.stringify(t.date)} is not YYYY-MM-DD`);if(t.date<e.documentDate)throw new j("invalid",`dated ${t.date}, before invoice ${s} (${e.documentDate})`);const o=Us(e.documentDate);if(t.date>o)throw new j("too-late",`dated ${t.date}, after ${o} — the last date a credit note against ${s} (${e.documentDate}) can reduce tax (s.34(2) CGST Act)`);if(t.lines.length===0)throw new j("invalid","the refund has no lines");const a=new Set,i=t.lines.map((r,d)=>{if(a.has(r.lineId))throw new j("invalid",`line ${JSON.stringify(r.lineId)} is listed twice`);a.add(r.lineId);const c=e.items.find(u=>u.id===r.lineId);if(!c)throw new j("invalid",`invoice ${s} has no line ${JSON.stringify(r.lineId)}`);return js(e,c,r,d+1,n.credited?.get(c.id))}),l=Ys(i);return{documentType:"CREDIT_NOTE",documentNumber:void 0,documentDate:t.date,supplyType:e.supplyType,taxSplit:e.taxSplit,placeOfSupply:e.placeOfSupply,reverseCharge:e.reverseCharge,isExport:e.isExport??!1,exportWithoutPaymentOfTax:e.exportWithoutPaymentOfTax??!1,currency:e.currency,seller:e.seller,buyer:e.buyer,shipTo:e.shipTo,items:i,totals:l,originalInvoice:{documentNumber:s,documentDate:e.documentDate,invoiceValue:e.totals.grandTotal}}}function js(e,t,n,s,o={quantity:0,amount:0}){const a=`line "${t.description}" (${t.id})`,i=n.quantity??0;if(!Number.isFinite(i)||i<0)throw new j("invalid",`${a}: quantity ${n.quantity} is not a number of units`);if(i>t.quantity)throw new j("invalid",`${a}: ${i} units returned but the invoice has ${t.quantity}`);if(o.quantity+i>t.quantity)throw new j("exceeds",`${a}: ${i} more units returned, but ${o.quantity} of the ${t.quantity} sold were already credited`);if(n.amount===void 0&&i===0)throw new j("invalid",`${a}: give the units returned, the amount refunded, or both`);const l=R(t.lineTotal-o.amount);let r;if(n.amount!==void 0?r=R(n.amount):o.quantity+i===t.quantity?r=l:r=R(t.lineTotal*i/t.quantity),!Number.isFinite(r)||r<=0)throw new j("invalid",`${a}: amount ${n.amount} is not a positive amount`);if(r>t.lineTotal+.005)throw new j("invalid",`${a}: ₹${r.toFixed(2)} refunded but the customer paid ₹${t.lineTotal.toFixed(2)} for it`);if(r>l+.01)throw new j("exceeds",`${a}: ₹${r.toFixed(2)} refunded, but only ₹${l.toFixed(2)} of what was paid for it is left to credit`);if(i===t.quantity&&Math.abs(r-t.lineTotal)<.005)return{...t,slNo:s};const d=la(r,t,e.taxSplit),c=Pt(d,t,e.taxSplit);return{id:t.id,slNo:s,description:t.description,hsn:t.hsn,quantity:i,unit:t.unit,unitPrice:i>0?R(d/i):0,isService:t.isService,grossAmount:d,discount:0,taxableValue:d,gstRate:t.gstRate,cgstRate:c.cgstRate,cgstAmount:c.cgstAmount,sgstRate:c.sgstRate,sgstAmount:c.sgstAmount,igstRate:c.igstRate,igstAmount:c.igstAmount,cessRate:c.cessRate,cessAmount:c.cessAmount,totalTax:c.totalTax,lineTotal:R(d+c.totalTax),...t.nonTaxable?{nonTaxable:t.nonTaxable}:{}}}function Ys(e){const t=O(e.map(a=>a.taxableValue)),n=O(e.map(a=>a.totalTax)),s=R(t+n),o=ra(s);return{totalTaxableValue:t,totalDiscount:O(e.map(a=>a.discount)),shippingCharge:e.find(a=>a.id==="shipping")?.taxableValue??0,totalCgst:O(e.map(a=>a.cgstAmount)),totalSgst:O(e.map(a=>a.sgstAmount)),totalIgst:O(e.map(a=>a.igstAmount)),totalCess:O(e.map(a=>a.cessAmount)),totalTax:n,grandTotalBeforeRound:s,roundOff:R(o-s),grandTotal:o}}const Tt=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],sn=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];function Je(e){if(e<20)return Tt[e];const t=Math.floor(e/10),n=e%10;return n===0?sn[t]:`${sn[t]} ${Tt[n]}`}function Ws(e){const t=Math.floor(e/100),n=e%100,s=[];return t>0&&s.push(`${Tt[t]} Hundred`),n>0&&s.push(Je(n)),s.join(" ")}function ua(e){if(e===0)return"Zero";const t=Math.floor(e/1e7);let n=e%1e7;const s=Math.floor(n/1e5);n%=1e5;const o=Math.floor(n/1e3);n%=1e3;const a=n,i=[];return t>0&&i.push(`${ua(t)} Crore`),s>0&&i.push(`${Je(s)} Lakh`),o>0&&i.push(`${Je(o)} Thousand`),a>0&&i.push(Ws(a)),i.join(" ")}function Js(e){const t=e<0,n=Math.round(R(Math.abs(e))*100),s=Math.floor(n/100),o=n%100;let a=t?"Minus ":"";return a+=`${ua(s)} Rupees`,o>0&&(a+=` and ${Je(o)} Paise`),a+=" Only",a}function S(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function H(e){return v(e)}function Ks(e){return e==="INR"?"₹":`${S(e)} `}function q(e,t){return`${Ks(t)}${H(e)}`}const on={INVOICE:"Tax Invoice",CREDIT_NOTE:"Credit Note"},Xs={NIL_RATED:"Nil rated",EXEMPT:"Exempt",NON_GST:"Non-GST"};function Zs(e){if(e.documentType!=="INVOICE")return on[e.documentType];const t=e.items.filter(n=>n.nonTaxable).length;return t>0&&t===e.items.length?"Bill of Supply":t>0&&!e.buyer.gstin?"Invoice-cum-Bill of Supply":on.INVOICE}const Qs=["January","February","March","April","May","June","July","August","September","October","November","December"];function Ae(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return"";const n=Number(t[2]),s=Number(t[3]);return n<1||n>12||s<1||s>31?"":`${s} ${Qs[n-1]} ${t[1]}`}function wt(e){return Le(e)===void 0}function ge(e){const t=Le(e);return t?`${S(e)} - ${S(t)}`:S(e)}function rn(e){const t=Le(e);return t?`${S(e)} ${S(t)}`:S(e)}function pe(e,t=""){return`<span class="${t?`flag ${t}`:"flag"}">${S(e)}</span>`}function ln(e,t){const n=[];n.push(`<div class="party-role">${S(e)}</div>`),n.push(`<div class="party-name">${S(t.legalName)}</div>`),t.tradeName&&t.tradeName!==t.legalName&&n.push(`<div class="party-trade">(${S(t.tradeName)})</div>`),n.push(`<div class="party-addr">${S(t.addressLine1)}</div>`),t.addressLine2&&n.push(`<div class="party-addr">${S(t.addressLine2)}</div>`),n.push(`<div class="party-addr">${S(t.location)} - <span class="data">${S(t.pincode)}</span></div>`);const s=wt(t.stateCode)?`${ge(t.stateCode)} ${pe("unrecognised state code")}`:ge(t.stateCode);return n.push(`<div class="party-data">State: ${s}</div>`),n.push(`<div class="party-data">GSTIN: ${t.gstin?`<span class="gstin">${S(t.gstin)}</span>`:'<span class="unreg">Unregistered</span>'}</div>`),t.phone&&n.push(`<div class="party-contact">Phone: ${S(t.phone)}</div>`),t.email&&n.push(`<div class="party-contact">Email: ${S(t.email)}</div>`),n.join(`
            `)}function eo(e){return`<colgroup>${(e?["3.5%","16%","10%","9%","10%","11%","6.5%","11%","11%","12%"]:["3.5%","27%","10%","9%","10%","11%","6.5%","11%","12%"]).map(n=>`<col style="width:${n}" />`).join("")}</colgroup>`}function pa(e){return e?10:9}const to=5;function no(e){const t=['<th class="sl" scope="col">Sl</th>','<th class="desc" scope="col">Description</th>','<th class="hsn" scope="col">HSN/SAC</th>','<th class="num" scope="col">Qty</th>','<th class="num" scope="col">Rate</th>','<th class="num" scope="col">Taxable</th>','<th class="band" scope="col">GST %</th>'],n=e?['<th class="num tax-1" scope="col">CGST</th>','<th class="num tax-2" scope="col">SGST</th>']:['<th class="num tax-1" scope="col">IGST</th>'];return[...t,...n,'<th class="num total" scope="col">Total</th>'].join("")}function ao(e,t,n){const s=t?[`<td class="num tax-1">${H(e.cgstAmount)}</td>`,`<td class="num tax-2">${H(e.sgstAmount)}</td>`]:[`<td class="num tax-1">${H(e.igstAmount)}</td>`],o=e.discount>0?`<span class="less">less ${H(e.discount)}</span>`:"";return["<tr>",`<td class="sl">${e.slNo}</td>`,`<td class="desc">${S(e.description)}</td>`,`<td class="hsn">${S(e.hsn)}</td>`,`<td class="num">${S(e.quantity)} ${S(e.unit)}</td>`,`<td class="num">${H(e.unitPrice)}</td>`,`<td class="num">${H(e.taxableValue)}${o}</td>`,`<td class="band">${e.nonTaxable?S(Xs[e.nonTaxable]):`${S(e.gstRate)}%`}</td>`,...s,`<td class="num total">${q(e.lineTotal,n)}</td>`,"</tr>"].join("")}function so(e,t,n,s){return`<tr class="ledger-id"><th class="ledger-id-cell" colspan="${pa(e)}" scope="colgroup">${S(t)} &middot; ${n} &middot; <span class="data">${S(s)}</span></th></tr>`}function oo(e,t){const n=e.totals,s=e.currency,o=t?[`<td class="num tax-1">${H(n.totalCgst)}</td>`,`<td class="num tax-2">${H(n.totalSgst)}</td>`]:[`<td class="num tax-1">${H(n.totalIgst)}</td>`];return['<tr class="doc-total">',`<th colspan="${to}" scope="row">Document Total</th>`,`<td class="num">${H(n.totalTaxableValue)}</td>`,'<td class="band"></td>',...o,`<td class="num total">${q(n.grandTotalBeforeRound,s)}</td>`,"</tr>"].join("")}function ro(e){return Array.from(new Set(e.map(t=>t.gstRate))).sort((t,n)=>t-n)}function io(e,t){const n=ro(e.items);if(n.length<2)return"";const s=e.currency,o=t?'<th class="band" scope="col">GST %</th><th class="num" scope="col">Taxable Value</th><th class="num tax-1" scope="col">CGST</th><th class="num tax-2" scope="col">SGST</th><th class="num total" scope="col">Tax Total</th>':'<th class="band" scope="col">GST %</th><th class="num" scope="col">Taxable Value</th><th class="num tax-1" scope="col">IGST</th><th class="num total" scope="col">Tax Total</th>',a=n.map(h=>{const f=e.items.filter(g=>g.gstRate===h),w=O(f.map(g=>g.taxableValue)),x=O(f.map(g=>g.cgstAmount)),y=O(f.map(g=>g.sgstAmount)),N=O(f.map(g=>g.igstAmount)),b=O(f.map(g=>g.totalTax)),E=R(h/2),C=t?`<span class="band-split">${E}% + ${E}%</span>`:"",A=t?`<td class="num tax-1">${H(x)}</td><td class="num tax-2">${H(y)}</td>`:`<td class="num tax-1">${H(N)}</td>`;return`<tr><th class="band" scope="row">${h}%${C}</th><td class="num">${H(w)}</td>${A}<td class="num total">${H(b)}</td></tr>`}).join(`
              `),i=h=>O(n.map(f=>O(e.items.filter(w=>w.gstRate===f).map(h)))),l=i(h=>h.taxableValue),r=i(h=>h.totalTax),d=v(l)===v(e.totals.totalTaxableValue)&&v(r)===v(e.totals.totalTax),c=t?`<td class="num tax-1">${H(i(h=>h.cgstAmount))}</td><td class="num tax-2">${H(i(h=>h.sgstAmount))}</td>`:`<td class="num tax-1">${H(i(h=>h.igstAmount))}</td>`;return`<section class="box" aria-labelledby="h-recap">
        <h2 class="vh" id="h-recap">Rate-wise recapitulation</h2>
        <span class="caption" aria-hidden="true">Recapitulation</span>
        <div class="table-scroll" role="region" aria-label="Rate-wise recapitulation, scrollable" tabindex="0">
          <table class="recap">
            <caption class="vh">Taxable value and tax by rate band</caption>
            <colgroup>${(t?["48.5%","11%","17.5%","11%","12%"]:["59.5%","11%","17.5%","12%"]).map(h=>`<col style="width:${h}" />`).join("")}</colgroup>
            <thead>
              <tr>${o}</tr>
            </thead>
            <tbody>
              ${a}
            </tbody>
            <tfoot>
              <tr class="doc-total">
                <th class="band" scope="row">All bands${d?"":`<br />${pe("does not agree with document total","wrap")}`}</th>
                <td class="num">${H(l)}</td>${c}
                <td class="num total">${q(r,s)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      `}function lo(e){const t=e.totals,n=e.currency,s=[];t.totalDiscount>0&&(s.push(["Gross Value",q(R(t.totalTaxableValue+t.totalDiscount),n)]),s.push(["Less: Discount",`-${q(t.totalDiscount,n)}`])),s.push(["Taxable Value",q(t.totalTaxableValue,n)]),e.taxSplit==="INTRA_STATE"?(s.push(["CGST",q(t.totalCgst,n)]),s.push(["SGST",q(t.totalSgst,n)])):s.push(["IGST",q(t.totalIgst,n)]),t.totalCess>0&&s.push(["Cess",q(t.totalCess,n)]),s.push(["Total Tax",q(t.totalTax,n)]),s.push(["Total Before Round Off",q(t.grandTotalBeforeRound,n)]);const o=t.roundOff>0?"+":t.roundOff<0?"-":"";s.push(["Round Off",`${o}${q(Math.abs(t.roundOff),n)}`]);const a=s.map(([l,r])=>`<tr><th scope="row">${S(l)}</th><td class="num">${r}</td></tr>`).join(`
              `),i=`<tr class="grand"><th scope="row">Grand Total</th><td class="num">${q(t.grandTotal,n)}</td></tr>`;return`${a}
              ${i}`}function co(e,t){const n=e.documentType==="CREDIT_NOTE",s=e.currency,o=n?"Amount Credited":"Amount Payable";let a;return t?a="Specimen only. Nothing is payable on this sheet and it settles no account.":e.reverseCharge?a="Tax on this supply is payable by the recipient under reverse charge and is not collected on this document.":e.isExport&&e.exportWithoutPaymentOfTax?a="Zero-rated export under Bond or Letter of Undertaking. No tax is charged on this supply.":n?a=`Credited against the original invoice, including ${q(e.totals.totalTax,s)} of tax. This is not a demand for payment.`:(e.advances??[]).length>0?a=`Includes ${q(e.totals.totalTax,s)} of tax. ${q(O(e.advances.map(i=>i.amount)),s)} was received in advance; ${q(ma(e),s)} is payable against this document.`:a=`Includes ${q(e.totals.totalTax,s)} of tax. Payable in full against this document.`,`<div class="demand">
              <div class="demand-head">
                <span class="demand-caption">${o}</span>
                <span class="demand-figure">${q(e.totals.grandTotal,s)}</span>
              </div>
              <div class="demand-note">${a}</div>
            </div>`}function uo(e){return e?"Verify: quote the reference beside this declaration on the Invoice Registration Portal. The portal record governs, not this sheet.":"Verify: match the document number, date and total on this sheet against the return filed by the supplier before claiming input tax credit."}const po=["M 0 10 C 17 2 33 2 50 10 S 83 18 100 10 S 133 2 150 10 S 183 18 200 10 S 233 2 250 10 S 283 18 300 10 S 333 2 350 10 S 383 18 400 10 S 433 2 450 10 S 483 18 500 10 S 533 2 550 10 S 583 18 600 10","M -33 10 C -16 5 0 5 17 10 S 50 15 67 10 S 100 5 117 10 S 150 15 167 10 S 200 5 217 10 S 250 15 267 10 S 300 5 317 10 S 350 15 367 10 S 400 5 417 10 S 450 15 467 10 S 500 5 517 10 S 550 15 567 10 S 600 5 617 10","M -67 10 C -50 7 -34 7 -17 10 S 16 13 33 10 S 66 7 83 10 S 116 13 133 10 S 166 7 183 10 S 216 13 233 10 S 266 7 283 10 S 316 13 333 10 S 366 7 383 10 S 416 13 433 10 S 466 7 483 10 S 516 13 533 10 S 566 7 583 10 S 616 13 633 10"];function mo(){return'<svg class="guilloche" viewBox="0 0 600 20" preserveAspectRatio="none" aria-hidden="true" focusable="false">'+po.map(e=>`<path d="${e}" />`).join("")+"</svg>"}function ho(e){const t=rn(e.seller.stateCode),n=rn(e.placeOfSupply),s=e.reverseCharge?' &middot; <span class="det-rc">tax payable by recipient under reverse charge</span>':"";if(e.isExport){const o=e.exportWithoutPaymentOfTax?"zero-rated export under LUT/Bond — supply without payment of integrated tax":"zero-rated export — supply with payment of integrated tax";return`${t} &rarr; ${n} &middot; ${o}${s}`}return e.taxSplit==="INTRA_STATE"?`${t} &rarr; ${n} &middot; intra-State supply &middot; CGST + SGST levied${s}`:`${t} &rarr; ${n} &middot; inter-State supply &middot; IGST levied${s}`}function fo(e){const t=e.corrected;if(!t)return"";const n=[];(t.was.gstin??"")!==(e.buyer.gstin??"")&&n.push(t.was.gstin?e.buyer.gstin?`buyer GSTIN corrected (was ${S(t.was.gstin)})`:`buyer GSTIN removed (was ${S(t.was.gstin)})`:"buyer GSTIN added (issued to an unregistered buyer)"),t.was.legalName!==e.buyer.legalName&&n.push(`buyer name was ${S(t.was.legalName)}`),t.was.placeOfSupply!==e.placeOfSupply&&n.push(`place of supply was ${S(ge(t.was.placeOfSupply))}`);const s=Ae(t.on)||t.on;return`
        <div class="determination correction-note">Corrected on ${S(s)}: ${n.join("; ")}${t.reason?`. Reason: ${S(t.reason)}`:""}.</div>`}function go(e){const t=e.advances??[];if(t.length===0)return"";const n=e.currency;return`
        <div class="determination advance-note">Advance received and adjusted against this invoice: ${t.map(o=>{const a=Ae(o.voucherDate)||o.voucherDate,i=o.totals.totalTax>0?` (tax of ${q(o.totals.totalTax,n)} paid on it then)`:"";return`${S(o.voucherNumber)} of ${S(a)}, ${q(o.amount,n)}${i}`}).join("; ")}. Balance payable ${q(ma(e),n)}.</div>`}function ma(e){return R(e.totals.grandTotal-O((e.advances??[]).map(t=>t.amount)))}function vo(e){if(!e.isExport)return"";const t=e.exportWithoutPaymentOfTax?"Supply Meant for Export Under Bond or Letter of Undertaking Without Payment of Integrated Tax":"Supply Meant for Export on Payment of Integrated Tax";return`
        <div class="endorse">
          <span class="endorse-label">Endorsement &middot; Rule 46</span>
          <span class="endorse-text">${S(t)}</span>
        </div>`}const bo=`
    /* ---- 1. TOKENS ------------------------------------------------------ */
    :root {
      color-scheme: light;

      --paper: #FFFFFF;            /* the sheet                              */
      --backdrop: #E4E8EF;         /* screen only, the desk; never printed   */
      --ink: #14181F;              /* body / descriptions / party names 17.8 */
      --ink-navy: #123A63;         /* registrar ink: h1, captions, rules 11.6*/
      --ink-navy-deep: #0B2444;    /* the paired rule + grand total     15.6 */
      --ink-muted: #4A5468;        /* secondary text, >=8pt              7.6 */
      --ink-muted-strong: #3C4658; /* micro text, <8pt                   9.5 */
      --ink-oxide: #7A1F1F;        /* REVERSAL AND ALARM ONLY           10.3 */
      --rule: #7E8CA3;             /* structural rules + row separators  3.4 */
      /* HATCH TEXTURE ONLY. At 1.62:1 this may never be the sole carrier of a
         boundary or of meaning: every hatched region is ALSO bordered at --rule
         or --ink-oxide and captioned in words. */
      --rule-faint: #C4CCD9;

      /* four calibrated rule weights carry the entire visual system */
      --w-hair: 0.4pt;
      --w-thin: 0.75pt;
      --w-body: 1.2pt;
      --w-heavy: 2pt;

      --face-serif: "Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, ui-serif, serif;
      --face-mono: ui-monospace, "SF Mono", "Cascadia Mono", Menlo, Consolas, "Liberation Mono", monospace;
    }

    /* ---- 2. RESET + DOCUMENT BASE --------------------------------------- */
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    body {
      font-family: var(--face-serif);
      color: var(--ink);
      font-size: 9.5pt;
      line-height: 1.34;
      background: var(--backdrop);
      -webkit-text-size-adjust: 100%;
    }
    img { max-width: 100%; }

    /* ---- 3. PRIMITIVES --------------------------------------------------- */
    .data, .gstin {
      font-family: var(--face-mono);
      font-variant-numeric: tabular-nums lining-nums;
      font-feature-settings: "tnum" 1, "lnum" 1;
    }
    .gstin { letter-spacing: .02em; }
    .vh {
      position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0;
      overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
    }
    /* Hatches are the ONLY non-white regions. Reserved area = navy hatch;
       voided / unregistered area = oxide hatch. Never decorative. */
    .hatch-navy {
      background: repeating-linear-gradient(45deg, transparent 0 3px, var(--rule-faint) 3px 4px);
      -webkit-print-color-adjust: exact; print-color-adjust: exact;
    }
    .hatch-oxide {
      background: repeating-linear-gradient(45deg, transparent 0 3px, #E7CFCF 3px 4px);
      -webkit-print-color-adjust: exact; print-color-adjust: exact;
    }
    /* Every alarm state uses this one device. */
    .flag {
      display: inline-block;
      border: var(--w-thin) solid var(--ink-oxide);
      color: var(--ink-oxide);
      font-family: var(--face-mono);
      font-size: 7pt;
      text-transform: uppercase;
      letter-spacing: .06em;
      padding: 0.3mm 1.2mm;
      white-space: nowrap;
    }
    /* A flag whose text is longer than the cell that holds it. Alarms are
       nowrap by default so a short one can never be split in two. */
    .flag.wrap { white-space: normal; }
    .mark {
      display: inline-block;
      border: var(--w-thin) solid var(--rule);
      color: var(--ink-navy);
      font-family: var(--face-mono);
      font-size: 7.5pt;
      text-transform: uppercase;
      letter-spacing: .06em;
      padding: 0.8mm 1.6mm;
      white-space: nowrap;
      /* THE STRUCK STAMP. A second, offset hairline, so the copy designation
         reads as an inked stamp rather than a UI badge. Drawn as an OUTLINE,
         never a second border and never a shadow: an outline costs no layout,
         and exactly one elevation exists in this document (the sheet, on
         screen). The paired-rule border style is reserved for the grand total
         alone and is deliberately not reached for here. */
      outline: var(--w-hair) solid var(--rule);
      outline-offset: 0.8mm;
    }
    /* Field captions and the caption tab share one type treatment. */
    .caption, .field-label, .party-role, table.items th, .sign-label,
    .demand-caption, table.recap thead th, table.recap tfoot th {
      font-family: var(--face-mono);
      font-size: 7.5pt;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: .06em;
      color: var(--ink-navy);
    }

    /* ---- 4. COMPONENTS (DOM order) --------------------------------------- */

    /* .sheet — the A4 leaf, with the binding stub as column 1. */
    .sheet {
      width: 210mm;
      min-height: 297mm;
      margin: 8mm auto;
      padding: 12mm 12mm 14mm;
      background: var(--paper);
      border: var(--w-thin) solid var(--rule);
      display: grid;
      grid-template-columns: 12mm 1fr;
      column-gap: 6mm;
      align-content: start;
      position: relative;
    }
    .sheet > .masthead, .sheet > main, .sheet > .plate { grid-column: 2; position: relative; z-index: 1; min-width: 0; }

    /* SIGNATURE COMPONENT 1 — THE BINDING STUB.
       Not decoration: Indian merchants file invoice books physically and CAs
       work from bound folders, so the spine text is what you read when the
       sheet is in a stack. Reads bottom-to-top, decorative to assistive tech. */
    .stub {
      grid-column: 1;
      grid-row: 1 / -1;
      border-right: var(--w-thin) solid var(--rule);
      font-family: var(--face-mono);
      font-size: 7pt;
      letter-spacing: .10em;
      text-transform: uppercase;
      color: var(--ink-muted-strong);
      overflow: hidden;
      user-select: none;
      -webkit-user-select: none;
      position: relative;
      z-index: 1;
    }
    /* The spine text is absolutely positioned ON PURPOSE. A vertical writing
       mode makes a box contribute its TEXT LENGTH as intrinsic HEIGHT, so an
       in-flow stub spanning every grid row inflates the masthead row by its own
       length and opens a dead band under the letterhead. Taking it out of flow
       lets it stretch to the sheet without ever sizing it. */
    .stub-text {
      position: absolute;
      inset: 0 2mm 0 0;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      white-space: nowrap;
    }

    /* Structural rules, drawn as elements so they can bookend a block. */
    .rule-hair  { border-top: var(--w-hair)  solid var(--ink-navy); }
    .rule-thin  { border-top: var(--w-thin)  solid var(--rule); }
    .rule-body  { border-top: var(--w-body)  solid var(--ink-navy); }
    .rule-heavy { border-top: var(--w-heavy) solid var(--ink-navy); }
    .rule-gap   { height: 1mm; }

    /* MASTHEAD — left-ruled with a right-hand meta block, the way a challan or
       a contract note is set. Grid placement means an arbitrarily long title
       can never collide with the copy designation. */
    .masthead-grid {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: start;
      column-gap: 6mm;
    }
    .doc-class { margin-bottom: 1.5mm; }
    h1 {
      margin: 0 0 1.5mm;
      font-family: var(--face-serif);
      font-size: 17pt;
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: .12em;
      text-transform: uppercase;
      color: var(--ink-navy);
      max-width: 120mm;
      overflow-wrap: anywhere;
    }
    .statute-note {
      font-family: var(--face-mono);
      font-size: 7pt;
      color: var(--ink-muted-strong);
      letter-spacing: .01em;
    }

    /* LETTERHEAD */
    .letterhead {
      display: grid;
      grid-template-columns: 1fr auto;
      column-gap: 6mm;
      align-items: start;
      margin-top: 1.5mm;
    }
    .seller-name { font-size: 11pt; font-weight: 600; line-height: 1.25; }
    .seller-name .trade { color: var(--ink-muted); font-weight: 400; font-size: 9.5pt; }
    .seller-address { font-size: 9.5pt; margin-top: 0.8mm; }
    .seller-gstin {
      font-family: var(--face-mono);
      font-size: 9.5pt;
      letter-spacing: .02em;
      font-variant-numeric: tabular-nums lining-nums;
      margin-top: 1mm;
    }
    .seller-contact {
      font-family: var(--face-mono);
      font-size: 8.5pt;
      color: var(--ink-muted-strong);
      text-align: right;
      line-height: 1.5;
    }
    .seller-contact a { color: var(--ink); text-decoration: none; }
    .seller-contact a:hover { text-decoration: underline; }
    a:focus-visible, .table-scroll:focus-visible { outline: 2px solid var(--ink-navy); outline-offset: 2px; }

    /* SIGNATURE COMPONENT 2 — THE CAPTION TAB THAT INTERRUPTS ITS OWN RULE.
       Exactly how a pre-printed government form captions a field: the caption
       sits ON the section's top rule and breaks it. Paper-on-paper, so it does
       not violate the no-filled-areas rule. Section boxes only, never inline. */
    /* The rule is drawn 2.6mm INSIDE the box instead of as its top border, so
       the caption that straddles it belongs to the box's own height. A section
       that starts a printed page then carries its own headroom and the caption
       cannot be sliced in half by the page margin. Spacing is unchanged:
       0.9mm margin + 2.6mm clearance = the old 3.5mm above the rule, and the
       content still sits 2.6mm below it. */
    .box { position: relative; margin-top: 0.9mm; padding-top: 5.2mm; min-width: 0; }
    .box::before {
      content: "";
      position: absolute;
      top: 2.6mm; left: 0; right: 0;
      border-top: var(--w-thin) solid var(--rule);
    }
    /* A grid item defaults to min-width:auto and REFUSES to shrink below its
       content, so a wide ledger would stretch the whole sheet and make the page
       scroll sideways. Zeroing it lets .table-scroll do the scrolling instead. */
    .masthead-grid > *, .letterhead > *, .parties > *, .settle > *, .attest > * { min-width: 0; }
    .table-scroll { min-width: 0; }
    .caption {
      position: absolute;
      top: 2.6mm;
      left: 2mm;
      transform: translateY(-50%);
      background: var(--paper);
      padding: 0 1.5mm;
    }

    /* META STRIP — the four-cell band. */
    .meta-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border-top: var(--w-body) solid var(--ink-navy);
      border-bottom: var(--w-body) solid var(--ink-navy);
      break-inside: avoid;
    }
    /* A credit note carries a fifth particular — the invoice it reverses
       (Rule 53(1A)). It takes a FULL-WIDTH ROW of its own rather than a fifth
       sliver: five equal cells leave 103.9px of content each at A4, and the
       document number needs 122.0px, so every credit note broke its own
       primary identifier mid-token ("INV/2025-" / "26/0001") and dropped the
       four value baselines out of line. The four base particulars therefore
       keep the invoice's proven 135.6px, and the statutory reference gets a
       610.3px row — which suits Rule 53(1A) better than a sliver anyway. The
       rule grammar (border-top replacing border-left) is the narrow
       breakpoint's, reused. */
    .doc-credit .meta-strip { grid-template-columns: repeat(4, 1fr); }
    .doc-credit .meta-cell:nth-child(5) { grid-column: 1 / -1; border-left: none;
      border-top: var(--w-thin) solid var(--rule); }
    .meta-strip > * { min-width: 0; }
    .meta-cell { padding: 1.5mm 3mm; }
    .meta-cell + .meta-cell { border-left: var(--w-thin) solid var(--rule); }
    /* Two-line minimum so all four value baselines align: mono uppercase is
       wide, and "Place of Supply" would otherwise push its value out of line. */
    .field-label { display: block; min-height: 6mm; line-height: 1.25; }
    .meta-value {
      font-family: var(--face-mono);
      font-size: 9.5pt;
      font-variant-numeric: tabular-nums lining-nums;
      overflow-wrap: anywhere;
    }
    .meta-sub { font-family: var(--face-mono); font-size: 7pt; color: var(--ink-muted-strong); margin-top: 0.6mm; }

    /* DETERMINATION LINE — why this document's tax looks the way it does. */
    .determination {
      font-family: var(--face-mono);
      font-size: 7.5pt;
      color: var(--ink-muted-strong);
      margin-top: 1.5mm;
      letter-spacing: .01em;
    }
    /* Reverse charge is a CONDITION of the supply, not a defect in the
       document, so it is stated in registrar ink — never in the oxide this
       system reserves for reversal and alarm. */
    .det-rc { color: var(--ink-navy); }

    /* PARTIES */
    .parties { display: grid; grid-template-columns: 1fr 1fr; }
    .party { padding-right: 5mm; }
    .party + .party { border-left: var(--w-thin) solid var(--rule); padding-left: 5mm; padding-right: 0; }
    .party-role { display: block; margin-bottom: 1.2mm; }
    .party-name { font-size: 10pt; font-weight: 600; overflow-wrap: anywhere; }
    .party-trade { color: var(--ink-muted); }
    .party-addr { overflow-wrap: anywhere; }
    .party-data {
      font-family: var(--face-mono);
      font-variant-numeric: tabular-nums lining-nums;
      font-size: 8.5pt;
      margin-top: 0.4mm;
    }
    .party-contact { font-family: var(--face-mono); font-size: 7.5pt; color: var(--ink-muted-strong); }
    .unreg { color: var(--ink-muted); font-style: italic; }

    /* LINE ITEMS */
    .table-scroll { overflow-x: auto; }
    table.items {
      width: 100%;
      table-layout: fixed;
      border-collapse: separate;
      border-spacing: 0;
      font-variant-numeric: tabular-nums lining-nums;
    }
    thead { display: table-header-group; }
    tfoot { display: table-footer-group; }
    table.items th {
      padding: 1.1mm 1.0mm;
      text-align: left;
      vertical-align: bottom;
      border-top: var(--w-body) solid var(--ink-navy);
      border-bottom: var(--w-heavy) solid var(--ink-navy);
    }
    table.items td {
      padding: 1.1mm 1.0mm;
      vertical-align: top;
      border-bottom: var(--w-hair) solid var(--rule);
      /* SET EXPLICITLY. The ledger cell used to inherit the 9.5pt body size,
         which is a prose size, not a column size: ten columns of 9.5pt mono do
         not fit 168mm without either wrapping a figure or starving the
         description. 8.5pt is the largest size at which every column holds its
         widest realistic figure on one line. */
      font-size: 8.5pt;
    }
    /* A FIGURE MUST NEVER BREAK. An amount split across two lines is the first
       thing a reader questions, so every numeric and code cell is nowrap and
       only the description column is allowed to wrap at all. */
    table.items td.num, table.items th.num { text-align: right; white-space: nowrap; }
    table.items td.hsn, table.items th.hsn, table.items td.sl, table.items th.sl { white-space: nowrap; }
    table.items td.num, table.items td.sl, table.items td.hsn { font-family: var(--face-mono); }
    table.items td.sl, table.items th.sl { text-align: center; }
    /* The one column set wider than the ledger's tight 1.0mm gutter: it holds
       prose, not figures, so it needs room to breathe on both sides. */
    table.items th.desc, table.items td.desc { border-right: var(--w-thin) solid var(--rule); overflow-wrap: anywhere; padding-left: 1.4mm; padding-right: 1.4mm; }
    table.items th.total, table.items td.total { border-left: var(--w-thin) solid var(--rule); }

    /* SIGNATURE COMPONENT 3 — THE RATE SPINE.
       Ruled on BOTH sides, so the ledger visibly divides into what was supplied
       and what it was worth | AT WHAT RATE | what tax arose. The rate used to be
       a sub-line repeated inside every tax cell, which printed it two dozen
       times on one sheet and made every row two lines tall. */
    table.items th.band, table.items td.band, table.recap th.band {
      border-left: var(--w-thin) solid var(--rule);
      border-right: var(--w-thin) solid var(--rule);
      text-align: center;
      white-space: nowrap;
      font-family: var(--face-mono);
    }
    /* The discount, under the taxable value it explains. The enclosing cell is
       nowrap so a FIGURE can never break; this annotation is explicitly
       re-wrapped, because at the top of the designed envelope
       ("less 18750.00") it is wider than the column and the alternative is
       bleeding over the neighbouring one. An annotation on two lines is
       readable; an amount overlapping another amount is not. The word "less"
       is kept rather than a bare minus sign: colour and symbols never carry
       meaning alone in this document. */
    .less {
      display: block;
      font-family: var(--face-mono);
      font-size: 7pt;
      color: var(--ink-muted-strong);
      white-space: normal;
    }
    .empty-row td { color: var(--ink-oxide); text-align: center; padding: 5mm 2mm; }

    /* LEDGER IDENTIFICATION — print only. A leaf separated from its masthead
       must still name the document it belongs to. It lives in <thead> because
       that is the only mechanism that BOTH repeats on every leaf AND reserves
       its own space; a fixed running head would print over the last rows. */
    .ledger-id { display: none; }
    table.items .ledger-id-cell {
      border-bottom: var(--w-hair) solid var(--rule);
      text-align: left;
      padding-bottom: 1.4mm;
    }

    /* THE DOCUMENT TOTAL BAND — repeated on every printed leaf via <tfoot>.
       Always the whole document's figures, never a running page subtotal. */
    table.items tfoot th, table.items tfoot td, table.recap tfoot th, table.recap tfoot td {
      border-top: var(--w-body) solid var(--ink-navy);
      border-bottom: var(--w-body) solid var(--ink-navy);
      padding-top: 1.4mm;
      padding-bottom: 1.4mm;
    }
    table.items tfoot th, table.recap tfoot th { text-align: right; vertical-align: middle; }
    table.items tfoot td, table.recap tfoot td { font-weight: 600; vertical-align: middle; }

    /* RECAPITULATION — the rate-wise cross-foot, only when there is more than
       one band to cross-foot. Same ruled grammar as the ledger. */
    table.recap {
      width: 100%;
      /* FIXED, like the ledger, and fed the colgroup below it — a cross-foot is
         read by running the eye DOWN a column from the ledger's total band into
         this one. Under auto layout the two tables resolved independent
         positions and
         the identical Taxable figure sat 75.2px from its own restatement. */
      table-layout: fixed;
      border-collapse: separate;
      border-spacing: 0;
      font-variant-numeric: tabular-nums lining-nums;
    }
    table.recap th, table.recap td { padding: 1.1mm 1.2mm; font-size: 8.5pt; }
    table.recap thead th {
      text-align: left;
      vertical-align: bottom;
      border-top: var(--w-body) solid var(--ink-navy);
      border-bottom: var(--w-heavy) solid var(--ink-navy);
    }
    table.recap tbody th, table.recap tbody td { border-bottom: var(--w-hair) solid var(--rule); }
    table.recap td.num, table.recap th.num { text-align: right; white-space: nowrap; font-family: var(--face-mono); }
    table.recap th.total, table.recap td.total { border-left: var(--w-thin) solid var(--rule); }
    table.recap tbody th.band { font-weight: 600; color: var(--ink); vertical-align: top; }
    /* The intra-State halving, stated ONCE per band. */
    .band-split {
      display: block;
      font-size: 7pt;
      font-weight: 400;
      color: var(--ink-muted-strong);
      letter-spacing: 0;
    }

    /* EXPORT ENDORSEMENT — Rule 46(o), on the face of the document. */
    .endorse {
      margin-top: 1.5mm;
      border: var(--w-thin) solid var(--ink-navy);
      padding: 1.2mm 2.5mm;
      display: flex;
      align-items: baseline;
      gap: 3mm;
      flex-wrap: wrap;
    }
    .endorse-label {
      font-family: var(--face-mono);
      font-size: 7pt;
      text-transform: uppercase;
      letter-spacing: .06em;
      color: var(--ink-muted-strong);
      flex: none;
    }
    .endorse-text {
      font-family: var(--face-mono);
      font-size: 8pt;
      text-transform: uppercase;
      letter-spacing: .04em;
      color: var(--ink-navy-deep);
      font-weight: 600;
    }

    /* SETTLEMENT — words on the left, the arithmetic ladder on the right. */
    .settle {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 6mm;
      align-items: start;
      break-inside: avoid;
    }
    .words-text { font-style: italic; font-size: 10.5pt; margin-top: 1mm; overflow-wrap: anywhere; }
    .currency-line { font-family: var(--face-mono); font-size: 7.5pt; color: var(--ink-muted-strong); margin-top: 1.5mm; }
    table.summary {
      border-collapse: separate;
      border-spacing: 0;
      min-width: 72mm;
      font-variant-numeric: tabular-nums lining-nums;
    }
    table.summary th {
      padding: 0.55mm 2mm;
      text-align: left;
      font-weight: 400;
      font-size: 8.5pt;
      border-bottom: var(--w-hair) solid var(--rule);
    }
    table.summary td.num {
      padding: 0.55mm 2mm;
      text-align: right;
      font-family: var(--face-mono);
      white-space: nowrap;
      border-bottom: var(--w-hair) solid var(--rule);
      border-left: var(--w-thin) solid var(--rule);
    }
    /* THE ACCOUNTANT'S RULE PAIR. Exactly one such border may exist in the
       rendered document — anything else using this style is a bug. */
    table.summary tr.grand th, table.summary tr.grand td {
      border-top: 3px double var(--ink-navy-deep);
      border-bottom: none;
      padding-top: 1.6mm;
      color: var(--ink-navy-deep);
      font-weight: 700;
      font-size: 11.5pt;
    }
    table.summary tr.grand td { font-family: var(--face-mono); }

    /* SIGNATURE COMPONENT 4 — THE DEMAND BAND.
       The ladder above it is for the CA. This band is for the person who bought
       a T-shirt: one heavy-ruled band stating what is owed, in a figure large
       enough to read across a counter, with the tax called out in plain
       language underneath. It restates nothing the ladder computes — it prints
       invoice.totals.grandTotal VERBATIM, the same string the return carries.

       FLEX, not grid, on purpose: the sheet's grid children carry a
       test-locked min-width selector, and a flex band whose head wraps needs
       no member in it.

       PLACED IN THE SETTLEMENT'S LEFT COLUMN, under the amount in words, and
       MEASURED there. The ladder opposite it runs to 161px while the words ran
       to 60px, so that column carried ~100px of dead white — the band drops
       into it for nothing, and the figure lands directly under the same amount
       spelled out in words, which is what "in figures and in words" means.
       Set full-width below the grid instead it cost 59px, and that was enough
       to push the engraved foot of a ONE-LINE invoice onto a second leaf. */
    .demand {
      margin-top: 3mm;
      padding: 1.8mm 0 2mm;
      border-top: var(--w-heavy) solid var(--ink-navy-deep);
      border-bottom: var(--w-heavy) solid var(--ink-navy-deep);
      break-inside: avoid;
    }
    /* Wraps rather than overflows: below the narrow breakpoint the caption and
       the figure take a line each instead of pushing the body sideways. */
    .demand-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 1.5mm 6mm;
      flex-wrap: wrap;
    }
    .demand-caption { flex: none; }
    .demand-figure {
      flex: none;
      font-family: var(--face-mono);
      font-variant-numeric: tabular-nums lining-nums;
      font-feature-settings: "tnum" 1, "lnum" 1;
      font-size: 22pt;
      font-weight: 700;
      line-height: 1;
      color: var(--ink-navy-deep);
      /* A DEMAND FIGURE MUST NEVER BREAK, at any width. */
      white-space: nowrap;
    }
    /* The tax, in words a customer reads — never a second cross-foot. */
    .demand-note {
      font-size: 8.5pt;
      color: var(--ink-muted);
      margin-top: 0.8mm;
      overflow-wrap: anywhere;
    }

    /* ATTESTATION */
    .attest { display: grid; grid-template-columns: auto 1fr auto; gap: 6mm; align-items: start; break-inside: avoid; }
    .attest-qr { width: 34mm; }
    .qr-slot, .qr-img { margin: 0 auto; }
    .qr-slot {
      width: 24mm; height: 24mm;
      border: var(--w-thin) solid var(--rule);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      text-align: center; gap: 1mm; padding: 2mm;
      break-inside: avoid;
    }
    .qr-slot.void { border-color: var(--ink-oxide); }
    .qr-img { width: 24mm; height: 24mm; display: block; border: var(--w-thin) solid var(--rule); }
    .qr-line1 { font-family: var(--face-mono); font-size: 7pt; text-transform: uppercase; letter-spacing: .06em; color: var(--ink-navy); }
    .qr-slot.void .qr-line1 { color: var(--ink-oxide); }
    .qr-line2 { font-family: var(--face-mono); font-size: 7pt; color: var(--ink-muted-strong); }
    .qr-meta { font-family: var(--face-mono); font-size: 7pt; margin-top: 1mm; color: var(--ink-muted-strong); overflow-wrap: anywhere; }
    .qr-meta .oxide { color: var(--ink-oxide); }
    /* REGISTERED, WITH NO IMAGE TO SHOW. A registered document has no code
       still pending, so it must never print the reserved square — that is the
       sheet contradicting the reference it prints two lines below. It takes the
       struck stamp instead, and the navy hatch is left to the one state that is
       genuinely waiting. */
    .qr-stamp { text-align: center; }
    .qr-stamp .mark { margin: 1mm 0 2.4mm; }
    .attest-decl { font-size: 8.5pt; color: var(--ink-muted); }
    /* HOW A READER CHECKS THIS SHEET. Ruled off under the declaration, because
       the declaration is the supplier speaking for itself and this line is what
       lets the recipient stop taking that word on trust. It names the register
       to check against and carries no address of any kind — the document stays
       self-contained. */
    .verify {
      font-family: var(--face-mono);
      font-size: 7.5pt;
      color: var(--ink-muted-strong);
      margin-top: 2mm;
      padding-top: 1.4mm;
      border-top: var(--w-hair) solid var(--rule);
      overflow-wrap: anywhere;
    }
    .attest-sign { width: 62mm; text-align: center; }
    .sign-for { font-size: 9.5pt; }
    .sign-space { height: 9mm; }
    .sign-rule { width: 52mm; margin: 0 auto; border-top: var(--w-thin) solid var(--rule); }
    .sign-label { display: block; margin-top: 1mm; }
    .sign-note { font-size: 7pt; color: var(--ink-muted-strong); margin-top: 2mm; }

    /* PLATE — the thick-thin pair, mirrored, closing the sheet. */
    .plate { margin-top: 4mm; break-inside: avoid; }
    .plate-row {
      display: flex; justify-content: space-between; gap: 4mm; margin-top: 1.5mm;
      font-family: var(--face-mono); font-size: 7pt; color: var(--ink-muted-strong);
      font-variant-numeric: tabular-nums lining-nums;
    }

    /* SIGNATURE COMPONENT 5 — THE ENGRAVED FOOT (guilloche).
       The visual grammar of a share certificate or a bank draft, and a real
       anti-tamper affordance: a hairline lattice is exactly what does not
       survive being retyped into a word processor, which is how fake invoices
       get made. Drawn as a FOREGROUND STROKE rather than a fill, so it still
       prints when the browser has background graphics switched off — which a
       hatch does not. It stays --rule on a credit note too: the lattice is a
       property of the PAPER, not of the document, and turning it oxide would
       spend the alarm ink on ornament. */
    .guilloche { display: block; width: 100%; height: 5mm; margin-top: 2mm; }
    /* vector-effect is MANDATORY here: under preserveAspectRatio="none" the
       stroke would otherwise be stretched horizontally into a smear. */
    .guilloche path {
      fill: none;
      stroke: var(--rule);
      stroke-width: .6;
      vector-effect: non-scaling-stroke;
    }

    /* ---- 5. STATES ------------------------------------------------------- */
    /* Credit note: the reversal ink takes over the masthead and the stub. */
    .doc-credit h1, .doc-credit .doc-class, .doc-credit .stub { color: var(--ink-oxide); }
    .doc-credit .masthead .rule-heavy, .doc-credit .masthead .rule-hair { border-top-color: var(--ink-oxide); }
    /* The demand band reverses with the masthead. The hue is never the carrier:
       the caption reads "Amount Credited" and the note says so in words. */
    .doc-credit .demand { border-top-color: var(--ink-oxide); border-bottom-color: var(--ink-oxide); }
    .doc-credit .demand-figure { color: var(--ink-oxide); }

    /* Specimen: three layers — a visually-hidden announcement, a bordered
       banner, and a watermark that survives printing. */
    .specimen-banner {
      border: var(--w-thin) solid var(--ink-oxide);
      color: var(--ink-oxide);
      padding: 1.2mm 2.5mm;
      margin-bottom: 1.5mm;
      font-family: var(--face-mono);
      font-size: 8pt;
      display: flex; align-items: center; gap: 3mm;
    }
    .specimen-edge { width: 6mm; align-self: stretch; min-height: 6mm; flex: none; }
    /* The CONTAINER stays unrotated and clips; only the word turns. Rotating
       the box itself widens its bounding rect past the sheet and makes the page
       scroll sideways, which a printed instrument must never do. */
    .watermark {
      position: absolute;
      inset: 0;
      display: flex; align-items: center; justify-content: center;
      pointer-events: none;
      overflow: hidden;
      z-index: 0;
    }
    .watermark span {
      font-family: var(--face-serif);
      font-size: 64pt;
      text-transform: uppercase;
      letter-spacing: .18em;
      color: var(--ink-oxide);
      opacity: .10;
      transform: rotate(-30deg);
      white-space: nowrap;
      -webkit-print-color-adjust: exact; print-color-adjust: exact;
    }

    /* ---- 6. SCREEN, NARROW ----------------------------------------------- */
    @media screen {
      .sheet { box-shadow: 0 1mm 4mm rgba(11, 36, 68, .13); }
    }
    @media screen and (max-width: 230mm) {
      .sheet {
        width: auto; max-width: 100%; min-height: 0; margin: 0;
        padding: 6mm 4mm 8mm; grid-template-columns: 1fr; column-gap: 0; border: none;
      }
      .stub { display: none; }
      .sheet > .masthead, .sheet > main, .sheet > .plate { grid-column: 1; }
      .masthead-grid, .letterhead, .settle { grid-template-columns: 1fr; row-gap: 3mm; }
      .seller-contact { text-align: left; }
      .meta-strip, .doc-credit .meta-strip { grid-template-columns: 1fr 1fr; }
      /* Cells 3 and 5 start a row, so their divider would be a stray tick. */
      .meta-cell:nth-child(3), .meta-cell:nth-child(5) { border-left: none; }
      .meta-cell:nth-child(n+3) { border-top: var(--w-thin) solid var(--rule); }
      .field-label { min-height: 0; }
      .parties, .attest { grid-template-columns: 1fr; row-gap: 4mm; }
      .party + .party { border-left: none; padding-left: 0; border-top: var(--w-thin) solid var(--rule); padding-top: 4mm; }
      .party { padding-right: 0; }
      .attest-sign, .attest-qr { width: auto; }
      /* Below A4 the ledger scrolls inside its own box rather than crushing its
         columns into slivers. The BODY still never scrolls horizontally. */
      table.items { min-width: 165mm; }
      table.recap { min-width: 100mm; }
      table.summary { min-width: 0; width: 100%; }
      h1 { font-size: 14pt; max-width: none; }
      /* The demand figure steps down rather than forcing the band to overflow;
         its head already wraps to two lines at this width. */
      .demand-figure { font-size: 17pt; }
      /* The size lives on the SPAN, not the container — setting it on .watermark
         is inert, and the 64pt word overflows a narrow sheet by ~85px a side. */
      .watermark span { font-size: 34pt; }
    }

    /* ---- 7. PAGE + PRINT -------------------------------------------------- */
    /* The line-items section is deliberately ABSENT: a 30-row ledger must stay
       breakable. The rest must not split, or the caption tab that straddles a
       section's top rule gets sliced in half at the page boundary. */
    tr, .settle, .attest, .plate, .meta-strip, .qr-slot, .endorse,
    section[aria-labelledby="h-meta"], section[aria-labelledby="h-parties"],
    section[aria-labelledby="h-recap"],
    section[aria-labelledby="h-settle"], section[aria-labelledby="h-attest"] { break-inside: avoid; }
    @page { size: A4; margin: 14mm 12mm 16mm; }
    @media print {
      body { background: var(--paper); }
      .sheet {
        width: auto; min-height: 0; margin: 0; padding: 0;
        border: none; grid-template-columns: 1fr; column-gap: 0;
      }
      .stub { display: none; }
      .sheet > .masthead, .sheet > main, .sheet > .plate { grid-column: 1; }
      /* Never clip the ledger in the PDF. */
      .table-scroll { overflow: visible; }
      /* An absolutely-positioned layer inside a fragmented .sheet paints on ONE
         page only, so page 1 of a long specimen printed clean. Chrome repeats a
         FIXED layer on every printed page, which is the whole point of a mark. */
      .watermark { position: fixed; }
      .seller-contact a { color: inherit; text-decoration: none; }
      .seller-contact a::after { content: none; }
      thead { display: table-header-group; }
      tfoot { display: table-footer-group; }
      /* Name the document on every leaf. Once this row carries the top rule,
         the column-header row below it must not draw a second one. */
      .ledger-id { display: table-row; }
      .ledger-id + tr th { border-top: none; }
    }

    /* ---- 8. FORCED COLORS -------------------------------------------------- */
    @media (forced-colors: active) {
      .hatch-navy, .hatch-oxide { background: var(--paper); border: var(--w-thin) solid CanvasText; }
      .flag, .mark, .qr-slot, .specimen-banner { border-color: CanvasText; }
      /* The stamp's offset hairline and the engraved foot are both strokes, so
         a forced palette drops them unless they are re-stated in system ink. */
      .mark { outline-color: CanvasText; }
      .guilloche path { stroke: CanvasText; }
      /* THE RULE MUST TARGET THE WORD, NOT THE CONTAINER. The opacity and the
         colour that actually render the mark live on the span, so a rule on
         .watermark was inert and the mark stayed at 10% — invisible in a
         forced palette. Restoring it to full strength as a FILLED word would
         be worse: a solid 64pt block over the figures. So it is stroked and
         left hollow — the mark reads, and every amount under it still does. */
      .watermark span {
        opacity: 1;
        color: Canvas;
        -webkit-text-stroke: 1px CanvasText;
      }
    }

    /* ---- 9. MOTION --------------------------------------------------------- */
    @media (prefers-reduced-motion: reduce) {
      * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
    }`;function cn(e,t){const n=e.taxSplit==="INTRA_STATE",s=e.documentType==="CREDIT_NOTE",o=e.currency,a=Zs(e),i=t?.title??a,l=t?.copyLabel??"Original for Recipient",r=t?.specimen===!0,d=e.documentDate,c=Ae(d),u=e.documentNumber??"(unassigned)",h=e.documentNumber?S(e.documentNumber):pe("unnumbered"),f=e.documentNumber?S(e.documentNumber):pe("unnumbered"),w=e.seller,x=[w.addressLine1,w.addressLine2,`${w.location} - ${w.pincode}`].filter(Boolean).map(X=>S(X)).join(", "),y=wt(w.stateCode)?`${ge(w.stateCode)} ${pe("unrecognised state code")}`:ge(w.stateCode),N=w.gstin?`GSTIN <span class="gstin">${S(w.gstin)}</span> &middot; State ${y}`:`State ${y}`,b=[];w.phone&&b.push(`<div>Phone <a href="tel:${S(w.phone)}">${S(w.phone)}</a></div>`),w.email&&b.push(`<div>Email <a href="mailto:${S(w.email)}">${S(w.email)}</a></div>`);const E=b.length?`<div class="seller-contact">${b.join("")}</div>`:"<div></div>",C=s?"Issued under Section 34 of the Central Goods and Services Tax Act, 2017 · Particulars per Rule 53":a==="Bill of Supply"?"Issued under Section 31(3)(c) of the Central Goods and Services Tax Act, 2017 · Particulars per Rule 49":a==="Invoice-cum-Bill of Supply"?"Issued under Section 31 of the Central Goods and Services Tax Act, 2017 · Rule 46A":"Issued under Section 31 of the Central Goods and Services Tax Act, 2017 · Particulars per Rule 46",A=wt(e.placeOfSupply)?`${ge(e.placeOfSupply)} ${pe("unrecognised state code")}`:ge(e.placeOfSupply),g=e.isExport?`
            <div class="meta-sub">Export</div>`:"",T=e.reverseCharge?`
            <div class="meta-sub">Tax payable by recipient</div>`:"",m=c?`
            <div class="meta-sub">${S(c)}</div>`:"",p=t?.originalInvoice??(e.originalInvoice?{number:e.originalInvoice.documentNumber,date:e.originalInvoice.documentDate}:void 0),$=s?`
          <div class="meta-cell">
            <span class="field-label">Against Invoice</span>
            <div class="meta-value">${p?S(p.number):pe("original invoice reference not supplied","wrap")}</div>${p?`
            <div class="meta-sub">${S(p.date)}${Ae(p.date)?` &middot; ${S(Ae(p.date))}`:""}</div>`:""}${e.orderCancelled?`
            <div class="meta-sub">Order cancelled${e.orderCancelled.reason?` (${S(e.orderCancelled.reason)})`:""}</div>`:""}
          </div>`:"",I=e.items.length?e.items.map(X=>ao(X,n,o)).join(`
            `):`<tr class="empty-row"><td colspan="${pa(n)}">${pe("no line items")} This document records a settlement with no supply.</td></tr>`,k=t?.einvoice,D=r?"void":k?.status??"pending",M=typeof t?.qrPngDataUri=="string"&&t.qrPngDataUri.startsWith("data:image/")&&D==="registered";let _,V;if(M?_=`<img class="qr-img" src="${S(t?.qrPngDataUri)}" alt="Signed QR code issued by the Invoice Registration Portal" />`:D==="void"?_=`<div class="qr-slot void hatch-oxide">
              <div class="qr-line1">Void</div>
              <div class="qr-line2">Specimen — no code issued</div>
            </div>`:D==="fake"?_=`<div class="qr-slot void hatch-oxide">
              <div class="qr-line1">Not registered</div>
              <div class="qr-line2">Test harness reference</div>
            </div>`:D==="registered"?_=`<div class="qr-stamp">
              <div class="mark">Registered</div>
              <div class="qr-line2">Signed code held by the portal</div>
            </div>`:_=`<div class="qr-slot hatch-navy">
              <div class="qr-line1">Signed QR reserved</div>
              <div class="qr-line2">Affixed on registration</div>
            </div>`,D==="fake")V=`<div class="qr-meta"><span class="oxide">Reference ${S(k?.irn??"—")}</span><br />This reference was produced by a test harness. It is not registered with the Invoice Registration Portal and has no legal effect.</div>`;else if(D==="void")V='<div class="qr-meta"><span class="oxide">Specimen — this sheet carries no registration reference and has no legal effect.</span></div>';else if(D==="registered"){const X=[k?.ackNo?`Ack ${S(k.ackNo)}`:"",k?.ackDate?S(k.ackDate):""].filter(Boolean).join(" &middot; ");V=`<div class="qr-meta">Reference ${S(k?.irn??"—")}${X?`<br />${X}`:""}</div>`}else V='<div class="qr-meta">Reference —</div>';const G=e.supplyType==="B2B"?`<div class="attest-qr">
            ${_}
            ${V}
          </div>`:D==="fake"||D==="void"?`<div class="attest-qr">${V}</div>`:"<div></div>",K=s?"Amount Credited (in words)":"Amount Chargeable (in words)",ne=s?"We declare that this credit note reflects an actual reduction against the supply described and that all particulars are true and correct.":"We declare that this invoice shows the actual price of the goods and services described and that all particulars are true and correct.",xe=r?`<p class="vh">Specimen. This sheet is a specimen, not an issued invoice. It is not a valid tax document and has no legal effect.</p>
        <div class="specimen-banner" role="note">
          <span class="specimen-edge hatch-oxide" aria-hidden="true"></span>
          <span>Specimen — not an issued invoice. Not a valid tax document; no legal effect.</span>
        </div>
        `:"",ee=r?`<div class="watermark" aria-hidden="true"><span>Specimen</span></div>
    `:"",he=["sheet",s?"doc-credit":"",r?"is-specimen":""].filter(Boolean).join(" ");return`<!DOCTYPE html>
<html lang="en-IN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${S(i)} ${S(u)}</title>
  <style>${bo}
  </style>
</head>
<body>
  <div class="${he}">
    ${ee}<div class="stub" aria-hidden="true"><span class="stub-text">${f} &middot; ${S(d)} &middot; ${S(a)}</span></div>

    <header class="masthead">
      <div class="masthead-grid">
        <div class="masthead-id">
          <div class="doc-class">${S(a)}</div>
          <h1>${S(i)}</h1>
          <div class="statute-note">${S(C)}</div>
        </div>
        <div class="mark copy-label">${S(l)}</div>
      </div>
      <div class="rule-heavy" aria-hidden="true"></div>
      <div class="rule-gap" aria-hidden="true"></div>
      <div class="rule-hair" aria-hidden="true"></div>
      <div class="letterhead">
        <div>
          <div class="seller-name">${S(w.legalName)}${w.tradeName&&w.tradeName!==w.legalName?` <span class="trade">(${S(w.tradeName)})</span>`:""}</div>
          <div class="seller-address">${x}</div>
          <div class="seller-gstin">${N}</div>
        </div>
        ${E}
      </div>
    </header>

    <main>
      ${xe}<section class="box" aria-labelledby="h-meta">
        <h2 class="vh" id="h-meta">Document details</h2>
        <span class="caption" aria-hidden="true">Document</span>
        <div class="meta-strip">
          <div class="meta-cell">
            <span class="field-label">${S(a)} No.</span>
            <div class="meta-value">${h}</div>
          </div>
          <div class="meta-cell">
            <span class="field-label">${S(a)} Date</span>
            <div class="meta-value">${S(d)}</div>${m}
          </div>
          <div class="meta-cell">
            <span class="field-label">Place of Supply</span>
            <div class="meta-value">${A}</div>${g}
          </div>
          <div class="meta-cell">
            <span class="field-label">Reverse Charge</span>
            <div class="meta-value">${e.reverseCharge?"Yes":"No"}</div>${T}
          </div>${$}
        </div>
        <div class="determination">${ho(e)}</div>${vo(e)}${fo(e)}${go(e)}
      </section>

      <section class="box" aria-labelledby="h-parties">
        <h2 class="vh" id="h-parties">Parties</h2>
        <span class="caption" aria-hidden="true">Parties</span>
        <div class="parties">
          <div class="party">
            ${ln("Billed To (Buyer)",e.buyer)}
          </div>
          <div class="party">
            ${ln("Shipped To (Consignee)",e.shipTo)}
          </div>
        </div>
      </section>

      <section class="box" aria-labelledby="h-items">
        <h2 class="vh" id="h-items">Line items and tax break-up</h2>
        <span class="caption" aria-hidden="true">Line Items</span>
        <div class="table-scroll" role="region" aria-label="Line items, scrollable" tabindex="0">
          <table class="items">
            <caption class="vh">Line items with GST break-up</caption>
            ${eo(n)}
            <thead>
              ${so(n,a,h,d)}
              <tr>${no(n)}</tr>
            </thead>
            <tbody>
            ${I}
            </tbody>
            <tfoot>
              ${oo(e,n)}
            </tfoot>
          </table>
        </div>
      </section>

      ${io(e,n)}<section class="box" aria-labelledby="h-settle">
        <h2 class="vh" id="h-settle">Settlement</h2>
        <span class="caption" aria-hidden="true">Settlement</span>
        <div class="settle">
          <div class="words">
            <span class="field-label">${S(K)}</span>
            <div class="words-text">${S(Js(e.totals.grandTotal))}</div>
            <div class="currency-line">Currency ${S(o)}</div>
            ${co(e,r)}
          </div>
          <table class="summary">
            <caption class="vh">Tax summary</caption>
            <tbody>
              ${lo(e)}
            </tbody>
          </table>
        </div>
      </section>

      <section class="box" aria-labelledby="h-attest">
        <h2 class="vh" id="h-attest">Attestation</h2>
        <span class="caption" aria-hidden="true">Attestation</span>
        <div class="attest">
          ${G}
          <div class="attest-decl">${ne}<div class="verify">${uo(D==="registered")}</div></div>
          <div class="attest-sign">
            <div class="sign-for">For ${S(w.legalName)}</div>
            <div class="sign-space" aria-hidden="true"></div>
            <div class="sign-rule" aria-hidden="true"></div>
            <span class="sign-label">Authorised Signatory</span>
            <div class="sign-note">This is a computer-generated ${S(a)} and needs no signature.</div>
          </div>
        </div>
      </section>
    </main>

    <footer class="plate">
      <div class="rule-thin" aria-hidden="true"></div>
      <div class="rule-gap" aria-hidden="true"></div>
      <div class="rule-heavy" aria-hidden="true"></div>
      <div class="plate-row">
        <span>${h}</span>
        <span>E. &amp; O. E.</span>
      </div>
      ${mo()}
    </footer>
  </div>
</body>
</html>`}const le=1e5;function Gt(e,t){return!e.buyer.gstin&&e.documentType==="INVOICE"&&!e.isExport&&e.taxSplit==="INTER_STATE"&&R(e.totals.grandTotal)>t}function Pe(e,t){if(!(e.documentType!=="CREDIT_NOTE"||!e.originalInvoice))return e.isExport?e.exportWithoutPaymentOfTax?"EXPWOP":"EXPWP":e.buyer.gstin?"CDNR":e.taxSplit==="INTER_STATE"&&R(e.originalInvoice.invoiceValue)>t?"B2CL":"B2CS"}function ut(e,t={}){const n=t.threshold??le;if(e.documentType==="CREDIT_NOTE"){const s=Pe(e,n);return s?s==="CDNR"?"CDNR":s==="B2CS"?"B2CS_NOTE":"CDNUR":"UNPLACED"}return e.isExport?"EXP":e.buyer.gstin?"B2B":Gt(e,n)?"B2CL":"B2CS"}const Bt=e=>!e.nonTaxable;function ha(e,t=e.items){const n=new Map;for(const s of t){const o=n.get(s.gstRate);o?o.push(s):n.set(s.gstRate,[s])}return[...n.entries()].sort(([s],[o])=>s-o)}function fa(e){const t=[];for(const n of e)if(Pe(n,le)==="CDNR")for(const[s,o]of ha(n))t.push({ctin:n.buyer.gstin,noteNumber:n.documentNumber??"",noteDate:n.documentDate,noteType:"C",placeOfSupply:n.placeOfSupply,reverseCharge:n.reverseCharge?"Y":"N",noteValue:R(n.totals.grandTotal),rate:s,taxableValue:O(o.map(a=>a.taxableValue)),igst:O(o.map(a=>a.igstAmount)),cgst:O(o.map(a=>a.cgstAmount)),sgst:O(o.map(a=>a.sgstAmount)),cess:O(o.map(a=>a.cessAmount)),originalInvoiceNumber:n.originalInvoice.documentNumber,originalInvoiceDate:n.originalInvoice.documentDate});return t}function yo(e,t={}){const n=t.threshold??le,s=[];for(const o of e){const a=Pe(o,n);if(!(a!=="B2CL"&&a!=="EXPWP"&&a!=="EXPWOP"))for(const[i,l]of ha(o))s.push({urType:a,noteNumber:o.documentNumber??"",noteDate:o.documentDate,noteType:"C",placeOfSupply:a==="B2CL"?o.placeOfSupply:"",noteValue:R(o.totals.grandTotal),rate:i,taxableValue:O(l.map(r=>r.taxableValue)),igst:O(l.map(r=>r.igstAmount)),cess:O(l.map(r=>r.cessAmount)),originalInvoiceNumber:o.originalInvoice.documentNumber,originalInvoiceDate:o.originalInvoice.documentDate})}return s}function To(e,t={}){const n=t.threshold??le,s=[];for(const o of e){if(!Gt(o,n))continue;const a=new Map;for(const r of o.items.filter(Bt)){const d=a.get(r.gstRate);d?d.push(r):a.set(r.gstRate,[r])}const i=R(o.totals.grandTotal),l=[...a.keys()].sort((r,d)=>r-d);for(const r of l){const d=a.get(r);s.push({invoiceNumber:o.documentNumber??"",invoiceDate:o.documentDate,invoiceValue:i,placeOfSupply:o.placeOfSupply,rate:r,taxableValue:O(d.map(c=>c.taxableValue)),igst:O(d.map(c=>c.igstAmount)),cess:O(d.map(c=>c.cessAmount))})}}return s}function wo(e){const t=[];for(const n of e){if(!n.isExport||n.documentType!=="INVOICE")continue;const s=new Map;for(const a of n.items){const i=s.get(a.gstRate);i?i.push(a):s.set(a.gstRate,[a])}const o=R(n.totals.grandTotal);for(const a of[...s.keys()].sort((i,l)=>i-l)){const i=s.get(a);t.push({exportType:n.exportWithoutPaymentOfTax?"WOPAY":"WPAY",invoiceNumber:n.documentNumber??"",invoiceDate:n.documentDate,invoiceValue:o,rate:a,taxableValue:O(i.map(l=>l.taxableValue)),igst:O(i.map(l=>l.igstAmount)),cess:O(i.map(l=>l.cessAmount))})}}return t}const Me=["INTRB2B","INTRAB2B","INTRB2C","INTRAB2C"],No={NIL_RATED:"nilRated",EXEMPT:"exempt",NON_GST:"nonGst"};function Nt(e,t={}){const n=t.threshold??le,s=new Map(Me.map(o=>[o,{nilRated:[],exempt:[],nonGst:[]}]));for(const o of e){let a=1;if(o.documentType==="CREDIT_NOTE"){if(Pe(o,n)!=="B2CS")continue;a=-1}else if(o.isExport)continue;const i=`${o.taxSplit==="INTER_STATE"?"INTR":"INTRA"}${o.buyer.gstin?"B2B":"B2C"}`;for(const l of o.items)l.nonTaxable&&s.get(i)[No[l.nonTaxable]].push(a*l.taxableValue)}return Me.map(o=>{const a=s.get(o);return{supplyType:o,nilRated:O(a.nilRated),exempt:O(a.exempt),nonGst:O(a.nonGst)}})}function ga(e){const t=[];for(const n of e){if(!n.buyer.gstin||n.isExport||n.documentType!=="INVOICE")continue;const s=new Map;for(const i of n.items.filter(Bt)){const l=s.get(i.gstRate);l?l.push(i):s.set(i.gstRate,[i])}const o=R(n.totals.grandTotal),a=[...s.keys()].sort((i,l)=>i-l);for(const i of a){const l=s.get(i);t.push({ctin:n.buyer.gstin,invoiceNumber:n.documentNumber??"",invoiceDate:n.documentDate,invoiceValue:o,placeOfSupply:n.placeOfSupply,reverseCharge:n.reverseCharge?"Y":"N",rate:i,taxableValue:O(l.map(r=>r.taxableValue)),cgst:O(l.map(r=>r.cgstAmount)),sgst:O(l.map(r=>r.sgstAmount)),igst:O(l.map(r=>r.igstAmount)),cess:O(l.map(r=>r.cessAmount))})}}return t}function Ke(e,t={}){const n=t.threshold??le,s=new Map;for(const a of e){let i=1;if(a.documentType==="CREDIT_NOTE"){if(Pe(a,n)!=="B2CS")continue;i=-1}else if(a.buyer.gstin||Gt(a,n)||a.isExport)continue;for(const l of a.items.filter(Bt)){const r=`${a.placeOfSupply}|${l.gstRate}`;let d=s.get(r);d||(d={placeOfSupply:a.placeOfSupply,rate:l.gstRate,taxable:[],cgst:[],sgst:[],igst:[],cess:[]},s.set(r,d)),d.taxable.push(i*l.taxableValue),d.cgst.push(i*l.cgstAmount),d.sgst.push(i*l.sgstAmount),d.igst.push(i*l.igstAmount),d.cess.push(i*l.cessAmount)}}const o=[...s.values()].map(a=>({type:"OE",placeOfSupply:a.placeOfSupply,rate:a.rate,taxableValue:O(a.taxable),cgst:O(a.cgst),sgst:O(a.sgst),igst:O(a.igst),cess:O(a.cess)})).filter(a=>[a.taxableValue,a.cgst,a.sgst,a.igst,a.cess].some(i=>i!==0));return o.sort((a,i)=>a.placeOfSupply<i.placeOfSupply?-1:a.placeOfSupply>i.placeOfSupply?1:a.rate-i.rate),o}function ye(e,t={}){const n=new Map;let s=0;for(const a of e){let i=1;if(a.documentType==="CREDIT_NOTE"){if(!a.originalInvoice){s++;continue}i=-1}for(const l of a.items.filter(r=>r.nonTaxable!=="NON_GST")){const r=`${l.hsn}|${l.gstRate}`;let d=n.get(r);d||(d={hsn:l.hsn,rate:l.gstRate,description:l.description,uqc:l.unit,quantity:[],taxable:[],igst:[],cgst:[],sgst:[],cess:[]},n.set(r,d)),d.quantity.push(l.id==="shipping"?0:i*l.quantity),d.taxable.push(i*l.taxableValue),d.igst.push(i*l.igstAmount),d.cgst.push(i*l.cgstAmount),d.sgst.push(i*l.sgstAmount),d.cess.push(i*l.cessAmount)}}const o=[...n.values()].map(a=>({hsn:a.hsn,description:a.description,uqc:a.uqc,totalQuantity:R(a.quantity.reduce((i,l)=>i+l,0)),taxableValue:O(a.taxable),igst:O(a.igst),cgst:O(a.cgst),sgst:O(a.sgst),cess:O(a.cess),rate:a.rate}));return o.sort((a,i)=>a.hsn<i.hsn?-1:a.hsn>i.hsn?1:a.rate-i.rate),s>0&&!t.silent&&console.warn(`[gstr1] hsnSummary: EXCLUDED ${s} credit note(s) from the Table 12 HSN summary: they carry no originalInvoice reference, so no GSTR-1 table can place them, and they are NOT netted off this table either. Issue credit notes with computeCreditNote, or adjust manually before filing.`),o}const xt=["taxableValue","igst","cgst","sgst","cess"];class dn{rows=new Map;add(t,n,s,o){for(const a of s){if(!a.taxed)continue;const i=`${t}|${n}|${a.gstRate}`;let l=this.rows.get(i);l||(l={placeOfSupply:t,taxSplit:n,rate:a.gstRate,taxableValue:0,igst:0,cgst:0,sgst:0,cess:0},this.rows.set(i,l));for(const r of xt)l[r]=R(l[r]+o*a[r])}}list(){return[...this.rows.values()].filter(t=>xt.some(n=>t[n]!==0)).sort((t,n)=>t.placeOfSupply!==n.placeOfSupply?t.placeOfSupply<n.placeOfSupply?-1:1:t.rate-n.rate)}}function St(e){const t=new dn,n=new dn,s=e.vouchers.filter(r=>r.voucherType==="RECEIPT_VOUCHER"),o=e.vouchers.filter(r=>r.voucherType==="REFUND_VOUCHER"),a=new Set(s.map(r=>r.voucherNumber)),i=e.invoices.filter(r=>r.documentType==="INVOICE"),l=new Set(i.flatMap(r=>(r.advances??[]).map(d=>d.voucherNumber)));for(const r of s)l.has(r.voucherNumber)||t.add(r.placeOfSupply,r.taxSplit,r.lines,1);for(const r of o){const d=r.receiptVoucher?.voucherNumber;d!==void 0&&a.has(d)?l.has(d)||t.add(r.placeOfSupply,r.taxSplit,r.lines,-1):n.add(r.placeOfSupply,r.taxSplit,r.lines,1)}for(const r of i)for(const d of r.advances??[])a.has(d.voucherNumber)||n.add(d.placeOfSupply,d.taxSplit,d.lines,1);return{received:t.list(),adjusted:n.list()}}const xo={taxableValue:0,igst:0,cgst:0,sgst:0,cess:0},Be=e=>e?{taxableValue:e.taxableValue,igst:e.igst,cgst:e.cgst,sgst:e.sgst,cess:e.cess}:{...xo},So=(e,t)=>xt.every(n=>Math.abs(e[n]-t[n])<.005);function un(e,t,n){const s=d=>`${d.placeOfSupply}|${d.taxSplit}|${d.rate}`,o=d=>d.slice(0,d.lastIndexOf("|")),a=new Map(t.map(d=>[s(d),d])),i=new Map(n.map(d=>[s(d),d])),l=[...new Set([...a.keys(),...i.keys()])],r=new Set(l.filter(d=>!So(Be(a.get(d)),Be(i.get(d)))).map(o));return l.filter(d=>r.has(o(d))).map(d=>{const[c,u,h]=d.split("|");return{period:e,placeOfSupply:c,taxSplit:u,rate:Number(h),...Be(i.get(d)),before:Be(a.get(d))}}).sort((d,c)=>d.placeOfSupply!==c.placeOfSupply?d.placeOfSupply<c.placeOfSupply?-1:1:d.rate-c.rate)}function $o(e,t,n){const s=St(t),o=St(n);return{received:un(e,s.received,o.received),adjusted:un(e,s.adjusted,o.adjusted)}}const pn=new Set(["B2B","B2CL","EXP","CDNR","CDNUR"]),pt=new Set(["B2CS","B2CS_NOTE"]);function mn(e){const t=Number(e.slice(0,4));return`${Number(e.slice(5,7))>=4?t+1:t}-11`}const hn=e=>`${e.buyer.gstin??""}|${e.placeOfSupply}`,ce={taxableValue:0,igst:0,cgst:0,sgst:0,cess:0},fn=e=>({taxableValue:e.taxableValue,igst:e.igst,cgst:e.cgst,sgst:e.sgst,cess:e.cess}),mt=(e,t)=>["taxableValue","igst","cgst","sgst","cess"].every(n=>Math.abs(e[n]-t[n])<.005);function Eo(e,t,n,s){const o=new Map(Ke(t,{threshold:s}).map(r=>[`${r.placeOfSupply}|${r.rate}`,r])),a=new Map(Ke(n,{threshold:s}).map(r=>[`${r.placeOfSupply}|${r.rate}`,r])),i=[...new Set([...o.keys(),...a.keys()])],l=new Set(i.filter(r=>!mt(o.get(r)??ce,a.get(r)??ce)).map(r=>r.split("|")[0]));return i.filter(r=>l.has(r.split("|")[0])&&!(mt(o.get(r)??ce,ce)&&mt(a.get(r)??ce,ce))).map(r=>{const[d,c]=r.split("|");return{period:e,placeOfSupply:d,rate:Number(c),...fn(a.get(r)??ce),before:fn(o.get(r)??ce)}}).sort((r,d)=>r.placeOfSupply===d.placeOfSupply?r.rate-d.rate:r.placeOfSupply<d.placeOfSupply?-1:1)}function Ro(e,t){return Me.map(n=>{const s=e.find(a=>a.supplyType===n),o=t.find(a=>a.supplyType===n);return{supplyType:n,nilRated:R(o.nilRated-s.nilRated),exempt:R(o.exempt-s.exempt),nonGst:R(o.nonGst-s.nonGst)}})}function va(e,t){return Me.map(n=>{const s=e.find(a=>a.supplyType===n)??{nilRated:0,exempt:0,nonGst:0},o=t.find(a=>a.supplyType===n)??{nilRated:0,exempt:0,nonGst:0};return{supplyType:n,nilRated:R(s.nilRated+o.nilRated),exempt:R(s.exempt+o.exempt),nonGst:R(s.nonGst+o.nonGst)}})}const ht=e=>`${e.hsn}|${e.rate}|${e.uqc}`,ft=["totalQuantity","taxableValue","igst","cgst","sgst","cess"];function Te(e,t,n=1){const s=new Map(e.map(o=>[ht(o),{...o}]));for(const o of t){const a=s.get(ht(o));if(!a){s.set(ht(o),{...o,...Object.fromEntries(ft.map(i=>[i,R(n*o[i])]))});continue}for(const i of ft)a[i]=R(a[i]+n*o[i])}return[...s.values()].filter(o=>ft.some(a=>o[a]!==0)).sort((o,a)=>o.hsn===a.hsn?o.rate-a.rate:o.hsn<a.hsn?-1:1)}const Ve=e=>!!e.buyer.gstin;function Co(e,t){const n=t.threshold??le,s={originals:[],issuedLate:[],vouchersLate:[],amended:[],b2ba:[],cdnra:[],b2csa:[],ata:[],txpda:[],nil:Me.map(a=>({supplyType:a,nilRated:0,exempt:0,nonGst:0})),hsnB2b:[],hsnB2c:[],months:[],warnings:[]};for(const a of[...e].sort((i,l)=>i.period<l.period?-1:1)){if(a.period>=t.period)throw new Error(`GSTR-1 ${t.period}: changes to ${a.period} can only be reported in a later return`);const i=new Map(a.reported.map(b=>[b.documentNumber,b])),l=[],r=[];for(const b of a.current){const E=i.get(b.documentNumber);E?hn(E)!==hn(b)&&r.push({before:E,after:b}):l.push(b)}const d=Eo(a.period,a.reported,a.current,n),c=Ro(Nt(a.reported,{threshold:n}),Nt(a.current,{threshold:n})),u=Te(ye(a.current.filter(Ve),{silent:!0}),ye(a.reported.filter(Ve),{silent:!0}),-1),h=Te(ye(a.current.filter(b=>!Ve(b)),{silent:!0}),ye(a.reported.filter(b=>!Ve(b)),{silent:!0}),-1),f=c.some(b=>b.nilRated!==0||b.exempt!==0||b.nonGst!==0),w=new Set((a.reportedVouchers??[]).map(b=>b.voucherNumber)),x=(a.currentVouchers??[]).filter(b=>!w.has(b.voucherNumber)),y=$o(a.period,{vouchers:a.reportedVouchers??[],invoices:a.reported},{vouchers:a.currentVouchers??[],invoices:a.current});if(!l.length&&!x.length&&!y.received.length&&!y.adjusted.length&&!r.length&&!d.length&&!f&&!u.length&&!h.length)continue;const N={period:a.period,late:[...l.map(b=>b.documentNumber??""),...x.map(b=>b.voucherNumber??"")],corrected:r.map(b=>b.after.documentNumber??""),tooLate:t.period>mn(`${a.period}-01`)};if(s.months.push(N),N.tooLate){s.warnings.push(`${a.period}: ${[...N.late,...N.corrected].join(", ")||"its figures"} changed after its return was filed, but ${mn(`${a.period}-01`)}'s return was the last that could report it (s.37(3)). Left out of this return: settle the difference in the annual return (GSTR-9) or by DRC-03.`);continue}s.issuedLate.push(...l),s.vouchersLate.push(...x),s.ata.push(...y.received),s.txpda.push(...y.adjusted);for(const b of l)pn.has(ut(b,{threshold:n}))&&s.originals.push(b);for(const{before:b,after:E}of r){const C=ut(b,{threshold:n}),A=ut(E,{threshold:n});C==="B2B"&&A==="B2B"?(s.amended.push(E),s.b2ba.push(...ga([E]).map(g=>({...g,originalInvoiceNumber:b.documentNumber??"",originalInvoiceDate:b.documentDate})))):C==="CDNR"&&A==="CDNR"?(s.amended.push(E),s.cdnra.push(...fa([E]).map(g=>({...g,originalNoteNumber:b.documentNumber??"",originalNoteDate:b.documentDate})))):pt.has(C)&&pn.has(A)?s.originals.push(E):pt.has(C)&&pt.has(A)||s.warnings.push(`${E.documentNumber} (${a.period}) changed from ${C} to ${A} after it was reported, which GSTR-1 cannot amend: report it by hand.`)}s.b2csa.push(...d),s.nil=va(s.nil,c),s.hsnB2b=Te(s.hsnB2b,u),s.hsnB2c=Te(s.hsnB2c,h)}if(s.b2csa.length){const a=s.b2csa.filter(i=>i.taxableValue===0&&i.before.taxableValue!==0);s.warnings.push("Table 10 restates the whole of each state's B2C (small) supplies for the months amended, not the difference"+(a.length?`; ${a.map(i=>`${i.placeOfSupply} at ${i.rate}% for ${i.period}`).join(", ")} come to ₹0.00 now`:"")+". Check them against what those returns said.")}if(s.ata.length||s.txpda.length){s.warnings.push("Table 11 amendments restate the whole of each state's advances (every rate) for the months amended, not the difference. Check them against what those returns said.");const a=[...gn(s.ata,"11A"),...gn(s.txpda,"11B")].filter(i=>i.rows.every(l=>Io(l.before)));a.length&&s.warnings.push(`${a.map(i=>`${i.table} ${i.placeOfSupply} for ${i.period}`).join(", ")}: the filed return had nothing there, so the amendment adds a record. If the portal will not amend a record that was never reported, add these to this month's Table 11 instead.`)}const o=s.nil.filter(a=>a.nilRated<0||a.exempt<0||a.nonGst<0);return o.length&&s.warnings.push(`Table 8 carries a negative adjustment for an earlier month (${o.map(a=>`${a.supplyType} ₹${v(a.nilRated+a.exempt+a.nonGst)}`).join(", ")}): Table 8 cannot be amended, so the difference is netted here.`),s}function gn(e,t){const n=new Map;for(const s of e){const o=`${s.period}|${s.placeOfSupply}`;n.has(o)||n.set(o,{table:t,period:s.period,placeOfSupply:s.placeOfSupply,rows:[]}),n.get(o).rows.push(s)}return[...n.values()]}const Io=e=>[e.taxableValue,e.igst,e.cgst,e.sgst,e.cess].every(t=>Math.abs(t)<.005),Oo=/^\d{4}-(0[1-9]|1[0-2])$/,Ao=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Z(e){const[t,n,s]=e.split("-");return`${s}-${Ao[Number(n)-1]}-${t}`}function oe(e){const[t,n,s]=e.split("-");return`${s}-${n}-${t}`}function te(e){return`${e}-${Le(e)??"Unknown"}`}function $t(e){if(!Oo.test(e))throw new Error(`not a return period: ${JSON.stringify(e)} (expected YYYY-MM)`);return`${e.slice(5,7)}${e.slice(0,4)}`}const Et={INVOICE:1,CREDIT_NOTE:5,RECEIPT_VOUCHER:6,REFUND_VOUCHER:8},ko={INVOICE:"Invoices for outward supply",CREDIT_NOTE:"Credit Note",RECEIPT_VOUCHER:"Receipt voucher",REFUND_VOUCHER:"Refund voucher"};function Do(e,t=[]){const n=new Map,s=[...e.map(a=>({documentType:a.documentType,number:a.documentNumber})),...t.map(a=>({documentType:a.voucherType,number:a.voucherNumber}))];for(const a of s){const i=a.number;if(!i)continue;const l=/^(.*\D)(\d+)$/.exec(i),r=l?l[1].replace(/\/$/,""):i,d=`${a.documentType}|${r}`;let c=n.get(d);c||(c={documentType:a.documentType,series:r,numbers:[]},n.set(d,c)),c.numbers.push({n:l?Number(l[2]):NaN,text:i})}const o=[];for(const a of n.values()){const i=[...a.numbers].sort((r,d)=>r.n-d.n||(r.text<d.text?-1:1));let l=0;for(let r=1;r<=i.length;r++){if(!(r===i.length||i[r].n!==i[r-1].n+1))continue;const c=r-l;o.push({documentType:a.documentType,series:a.series,from:i[l].text,to:i[r-1].text,total:c,cancelled:0,netIssued:c}),l=r}}return o.sort((a,i)=>a.documentType!==i.documentType?Et[a.documentType]-Et[i.documentType]:a.from<i.from?-1:1)}function vn(e){return[["HSN","Description","UQC","Total Quantity","Total Value","Rate (%)","Taxable Value","Integrated Tax","Central Tax","State/UT Tax","Cess"],...e.map(t=>[t.hsn,t.description??"",t.uqc,t.totalQuantity,v(O([t.taxableValue,t.igst,t.cgst,t.sgst,t.cess])),t.rate,v(t.taxableValue),v(t.igst),v(t.cgst),v(t.sgst),v(t.cess)])]}const bn=e=>!!e.buyer.gstin;function ba(e,t){const n=t.threshold??le;if(t.carried?.length&&!t.period)throw new Error("GSTR-1: amendments need the return period");const s=Co(t.carried??[],{period:t.period??"",threshold:n}),o=[...e,...s.originals],a=[...e,...s.issuedLate],i=[...t.vouchers??[],...s.vouchersLate];return{amendments:s,invoiceWise:o,b2b:ga(o),b2cl:To(o,{threshold:n}),exp:wo(o),b2cs:Ke(e,{threshold:n}),cdnr:fa(o),cdnur:yo(o,{threshold:n}),nil:va(Nt(e,{threshold:n}),s.nil),hsnB2b:Te(ye(e.filter(bn),{silent:!0}),s.hsnB2b),hsnB2c:Te(ye(e.filter(l=>!bn(l)),{silent:!0}),s.hsnB2c),runs:Do(a,i),vouchers:i,advances:St({vouchers:t.vouchers??[],invoices:e}),hasAdvances:(t.vouchers??[]).length>0||e.some(l=>(l.advances??[]).length>0)}}function yn(e,t){return[["Original Month","Place of Supply","Rate (%)",`Revised ${t}`,"Integrated Tax","Central Tax","State/UT Tax","Cess",`${t} As Filed`],...e.map(n=>[n.period,te(n.placeOfSupply),n.rate,v(n.taxableValue),v(n.igst),v(n.cgst),v(n.sgst),v(n.cess),v(n.before.taxableValue)])]}function Tn(e,t){return[["Place of Supply","Rate (%)",t,"Integrated Tax","Central Tax","State/UT Tax","Cess"],...e.map(n=>[te(n.placeOfSupply),n.rate,v(n.taxableValue),v(n.igst),v(n.cgst),v(n.sgst),v(n.cess)])]}const Mo={INTRB2B:"Inter-State supplies to registered persons",INTRAB2B:"Intra-State supplies to registered persons",INTRB2C:"Inter-State supplies to unregistered persons",INTRAB2C:"Intra-State supplies to unregistered persons"};function Lo(e,t={}){const n=ba(e,t),s=new Map,o=new Map([...n.invoiceWise,...n.amendments.amended].map(a=>[a.documentNumber??"",a.buyer.legalName]));if(s.set("b2b.csv",F([["Recipient GSTIN","Recipient Name","Invoice Number","Invoice Date","Invoice Value","Place of Supply","Reverse Charge","Rate (%)","Taxable Value","Integrated Tax","Central Tax","State/UT Tax","Cess"],...n.b2b.map(a=>[a.ctin,o.get(a.invoiceNumber)??"",a.invoiceNumber,Z(a.invoiceDate),v(a.invoiceValue),te(a.placeOfSupply),a.reverseCharge,a.rate,v(a.taxableValue),v(a.igst),v(a.cgst),v(a.sgst),v(a.cess)])])),s.set("b2cl.csv",F([["Invoice Number","Invoice Date","Invoice Value","Place of Supply","Rate (%)","Taxable Value","Integrated Tax","Cess"],...n.b2cl.map(a=>[a.invoiceNumber,Z(a.invoiceDate),v(a.invoiceValue),te(a.placeOfSupply),a.rate,v(a.taxableValue),v(a.igst),v(a.cess)])])),s.set("b2cs.csv",F([["Type","Place of Supply","Rate (%)","Taxable Value","Integrated Tax","Central Tax","State/UT Tax","Cess"],...n.b2cs.map(a=>[a.type,te(a.placeOfSupply),a.rate,v(a.taxableValue),v(a.igst),v(a.cgst),v(a.sgst),v(a.cess)])])),s.set("exp.csv",F([["Export Type","Invoice Number","Invoice Date","Invoice Value","Port Code","Shipping Bill Number","Shipping Bill Date","Rate (%)","Taxable Value","Integrated Tax","Cess"],...n.exp.map(a=>[a.exportType,a.invoiceNumber,Z(a.invoiceDate),v(a.invoiceValue),"","","",a.rate,v(a.taxableValue),v(a.igst),v(a.cess)])])),s.set("cdnr.csv",F([["Recipient GSTIN","Recipient Name","Note Number","Note Date","Note Type","Place of Supply","Reverse Charge","Note Supply Type","Note Value","Rate (%)","Taxable Value","Integrated Tax","Central Tax","State/UT Tax","Cess","Original Invoice Number","Original Invoice Date"],...n.cdnr.map(a=>[a.ctin,o.get(a.noteNumber)??"",a.noteNumber,Z(a.noteDate),a.noteType,te(a.placeOfSupply),a.reverseCharge,"Regular B2B",v(a.noteValue),a.rate,v(a.taxableValue),v(a.igst),v(a.cgst),v(a.sgst),v(a.cess),a.originalInvoiceNumber,Z(a.originalInvoiceDate)])])),s.set("cdnur.csv",F([["UR Type","Note Number","Note Date","Note Type","Place of Supply","Note Value","Rate (%)","Taxable Value","Integrated Tax","Cess","Original Invoice Number","Original Invoice Date"],...n.cdnur.map(a=>[a.urType,a.noteNumber,Z(a.noteDate),a.noteType,a.placeOfSupply?te(a.placeOfSupply):"",v(a.noteValue),a.rate,v(a.taxableValue),v(a.igst),v(a.cess),a.originalInvoiceNumber,Z(a.originalInvoiceDate)])])),s.set("nil.csv",F([["Description","Nil Rated Supplies","Exempted (other than nil rated/non GST supply)","Non-GST Supplies"],...n.nil.map(a=>[Mo[a.supplyType],v(a.nilRated),v(a.exempt),v(a.nonGst)])])),s.set("hsn-b2b.csv",F(vn(n.hsnB2b))),s.set("hsn-b2c.csv",F(vn(n.hsnB2c))),s.set("docs.csv",F([["Nature of Document","Sr. No. From","Sr. No. To","Total Number","Cancelled","Net Issued"],...n.runs.map(a=>[ko[a.documentType],a.from,a.to,a.total,a.cancelled,a.netIssued])])),n.hasAdvances&&(s.set("at.csv",F(Tn(n.advances.received,"Gross Advance Received"))),s.set("atadj.csv",F(Tn(n.advances.adjusted,"Gross Advance Adjusted")))),(n.amendments.ata.length||n.amendments.txpda.length)&&(s.set("ata.csv",F(yn(n.amendments.ata,"Gross Advance Received"))),s.set("txpda.csv",F(yn(n.amendments.txpda,"Gross Advance Adjusted")))),n.amendments.months.length>0){const{b2ba:a,cdnra:i,b2csa:l}=n.amendments;s.set("b2ba.csv",F([["Original Invoice Number","Original Invoice Date","Recipient GSTIN","Recipient Name","Revised Invoice Number","Revised Invoice Date","Invoice Value","Place of Supply","Reverse Charge","Rate (%)","Taxable Value","Integrated Tax","Central Tax","State/UT Tax","Cess"],...a.map(r=>[r.originalInvoiceNumber,Z(r.originalInvoiceDate),r.ctin,o.get(r.invoiceNumber)??"",r.invoiceNumber,Z(r.invoiceDate),v(r.invoiceValue),te(r.placeOfSupply),r.reverseCharge,r.rate,v(r.taxableValue),v(r.igst),v(r.cgst),v(r.sgst),v(r.cess)])])),s.set("cdnra.csv",F([["Original Note Number","Original Note Date","Recipient GSTIN","Revised Note Number","Revised Note Date","Note Type","Place of Supply","Note Value","Rate (%)","Taxable Value","Integrated Tax","Central Tax","State/UT Tax","Cess"],...i.map(r=>[r.originalNoteNumber,Z(r.originalNoteDate),r.ctin,r.noteNumber,Z(r.noteDate),r.noteType,te(r.placeOfSupply),v(r.noteValue),r.rate,v(r.taxableValue),v(r.igst),v(r.cgst),v(r.sgst),v(r.cess)])])),s.set("b2csa.csv",F([["Original Month","Place of Supply","Rate (%)","Revised Taxable Value","Integrated Tax","Central Tax","State/UT Tax","Cess","Taxable Value As Filed"],...l.map(r=>[r.period,te(r.placeOfSupply),r.rate,v(r.taxableValue),v(r.igst),v(r.cgst),v(r.sgst),v(r.cess),v(r.before.taxableValue)])]))}return s}const P=e=>R(e)+0;function de(e,t){return e?{rt:t.rate,txval:P(t.taxableValue),iamt:P(t.igst),csamt:P(t.cess)}:{rt:t.rate,txval:P(t.taxableValue),camt:P(t.cgst??0),samt:P(t.sgst??0),csamt:P(t.cess)}}function W(e,t){const n=new Map;for(const s of e){const o=t(s),a=n.get(o);a?a.push(s):n.set(o,[s])}return[...n.entries()]}function wn(e){return e.map((t,n)=>{const s=t.hsn.startsWith("99");return{num:n+1,hsn_sc:t.hsn,desc:(t.description??"").slice(0,30),uqc:s?"NA":t.uqc,qty:s?0:P(t.totalQuantity),rt:t.rate,txval:P(t.taxableValue),iamt:P(t.igst),camt:P(t.cgst),samt:P(t.sgst),csamt:P(t.cess)}})}function Nn(e){return W(e,t=>`${t.placeOfSupply}|${t.taxSplit}`).map(([,t])=>ya(t))}function ya(e){const t=e[0].taxSplit==="INTER_STATE";return{pos:e[0].placeOfSupply,sply_ty:t?"INTER":"INTRA",itms:e.map(n=>t?{rt:n.rate,ad_amt:P(n.taxableValue),iamt:P(n.igst),csamt:P(n.cess)}:{rt:n.rate,ad_amt:P(n.taxableValue),camt:P(n.cgst),samt:P(n.sgst),csamt:P(n.cess)})}}function xn(e){return W(e,t=>`${t.period}|${t.placeOfSupply}|${t.taxSplit}`).map(([,t])=>({omon:$t(t[0].period),...ya(t)}))}function Po(e){const{seller:t}=e;if(!t.gstin)throw new Error("GSTR-1 needs the seller GSTIN");const n=ba(e.documents,e),s=g=>g!==t.stateCode,o={gstin:t.gstin,fp:$t(e.period)},a=W(n.b2b,g=>g.ctin).map(([g,T])=>({ctin:g,inv:W(T,m=>m.invoiceNumber).map(([m,p])=>({inum:m,idt:oe(p[0].invoiceDate),val:P(p[0].invoiceValue),pos:p[0].placeOfSupply,rchrg:p[0].reverseCharge,inv_typ:"R",itms:p.map(($,I)=>({num:I+1,itm_det:de(s($.placeOfSupply),$)}))}))}));a.length&&(o.b2b=a);const i=W(n.b2cl,g=>g.placeOfSupply).map(([g,T])=>({pos:g,inv:W(T,m=>m.invoiceNumber).map(([m,p])=>({inum:m,idt:oe(p[0].invoiceDate),val:P(p[0].invoiceValue),itms:p.map(($,I)=>({num:I+1,itm_det:de(!0,$)}))}))}));i.length&&(o.b2cl=i);const l=n.b2cs.map(g=>({sply_ty:s(g.placeOfSupply)?"INTER":"INTRA",pos:g.placeOfSupply,typ:"OE",...de(s(g.placeOfSupply),g)}));l.length&&(o.b2cs=l);const r=W(n.exp,g=>g.exportType).map(([g,T])=>({exp_typ:g,inv:W(T,m=>m.invoiceNumber).map(([m,p])=>({inum:m,idt:oe(p[0].invoiceDate),val:P(p[0].invoiceValue),itms:p.map($=>({txval:P($.taxableValue),rt:$.rate,iamt:P($.igst),csamt:P($.cess)}))}))}));r.length&&(o.exp=r);const d=W(n.cdnr,g=>g.ctin).map(([g,T])=>({ctin:g,nt:W(T,m=>m.noteNumber).map(([m,p])=>({ntty:"C",nt_num:m,nt_dt:oe(p[0].noteDate),val:P(p[0].noteValue),pos:p[0].placeOfSupply,rchrg:p[0].reverseCharge,inv_typ:"R",itms:p.map(($,I)=>({num:I+1,itm_det:de(s($.placeOfSupply),$)}))}))}));d.length&&(o.cdnr=d);const c=W(n.cdnur,g=>g.noteNumber).map(([g,T])=>({typ:T[0].urType,ntty:"C",nt_num:g,nt_dt:oe(T[0].noteDate),val:P(T[0].noteValue),...T[0].placeOfSupply?{pos:T[0].placeOfSupply}:{},itms:T.map((m,p)=>({num:p+1,itm_det:de(!0,m)}))}));c.length&&(o.cdnur=c);const u=n.nil.filter(g=>g.nilRated!==0||g.exempt!==0||g.nonGst!==0).map(g=>({sply_ty:g.supplyType,nil_amt:P(g.nilRated),expt_amt:P(g.exempt),ngsup_amt:P(g.nonGst)}));u.length&&(o.nil={inv:u});const h=wn(n.hsnB2b),f=wn(n.hsnB2c);(h.length||f.length)&&(o.hsn={...h.length?{hsn_b2b:h}:{},...f.length?{hsn_b2c:f}:{}});const w=Nn(n.advances.received);w.length&&(o.at=w);const x=Nn(n.advances.adjusted);x.length&&(o.txpd=x);const y=xn(n.amendments.ata);y.length&&(o.ata=y);const N=xn(n.amendments.txpda);N.length&&(o.txpda=N);const b=n.runs;b.length&&(o.doc_issue={doc_det:["INVOICE","CREDIT_NOTE","RECEIPT_VOUCHER","REFUND_VOUCHER"].map(g=>({doc_num:Et[g],docs:b.filter(T=>T.documentType===g).map((T,m)=>({num:m+1,from:T.from,to:T.to,totnum:T.total,cancel:T.cancelled,net_issue:T.netIssued}))})).filter(g=>g.docs.length>0)});const{b2ba:E,cdnra:C,b2csa:A}=n.amendments;return E.length&&(o.b2ba=W(E,g=>g.ctin).map(([g,T])=>({ctin:g,inv:W(T,m=>m.invoiceNumber).map(([m,p])=>({oinum:p[0].originalInvoiceNumber,oidt:oe(p[0].originalInvoiceDate),inum:m,idt:oe(p[0].invoiceDate),val:P(p[0].invoiceValue),pos:p[0].placeOfSupply,rchrg:p[0].reverseCharge,inv_typ:"R",itms:p.map(($,I)=>({num:I+1,itm_det:de(s($.placeOfSupply),$)}))}))}))),C.length&&(o.cdnra=W(C,g=>g.ctin).map(([g,T])=>({ctin:g,nt:W(T,m=>m.noteNumber).map(([m,p])=>({ntty:"C",ont_num:p[0].originalNoteNumber,ont_dt:oe(p[0].originalNoteDate),nt_num:m,nt_dt:oe(p[0].noteDate),val:P(p[0].noteValue),pos:p[0].placeOfSupply,rchrg:p[0].reverseCharge,inv_typ:"R",itms:p.map(($,I)=>({num:I+1,itm_det:de(s($.placeOfSupply),$)}))}))}))),A.length&&(o.b2csa=W(A,g=>`${g.period}|${g.placeOfSupply}`).map(([,g])=>({omon:$t(g[0].period),sply_ty:s(g[0].placeOfSupply)?"INTER":"INTRA",pos:g[0].placeOfSupply,typ:"OE",itms:g.map(T=>de(s(T.placeOfSupply),T))}))),o}const Sn="GST Suite Company (PLACEHOLDER — SET companyName)";function me(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}function _o(e){return R(e).toFixed(2)}function Go(e){const t=/^(\d{4})-(\d{2})-(\d{2})/.exec(e);return t?`${t[1]}${t[2]}${t[3]}`:e}function fe(e,t,n,s){const o=n?-Math.abs(t):Math.abs(t),a=s+"  ";return[`${s}<ALLLEDGERENTRIES.LIST>`,`${a}<LEDGERNAME>${me(e)}</LEDGERNAME>`,`${a}<ISDEEMEDPOSITIVE>${n?"Yes":"No"}</ISDEEMEDPOSITIVE>`,`${a}<AMOUNT>${_o(o)}</AMOUNT>`,`${s}</ALLLEDGERENTRIES.LIST>`].join(`
`)}function Bo(e){const t=e.documentType==="CREDIT_NOTE",n=t?"Credit Note":"Sales",s=e.buyer.legalName,o=e.totals,a=!t,i=t,l=[];l.push(`          <VOUCHER VCHTYPE="${me(n)}" ACTION="Create">`),l.push(`            <DATE>${Go(e.documentDate)}</DATE>`),l.push(`            <VOUCHERTYPENAME>${me(n)}</VOUCHERTYPENAME>`),l.push(`            <VOUCHERNUMBER>${me(e.documentNumber??"")}</VOUCHERNUMBER>`),l.push(`            <PARTYLEDGERNAME>${me(s)}</PARTYLEDGERNAME>`),l.push(`            <PARTYNAME>${me(s)}</PARTYNAME>`),l.push(`            <PLACEOFSUPPLY>${me(e.placeOfSupply)}</PLACEOFSUPPLY>`);const r="            ";if(l.push(fe(s,o.grandTotal,a,r)),l.push(fe("Sales",o.totalTaxableValue,i,r)),e.taxSplit==="INTRA_STATE"?(o.totalCgst!==0&&l.push(fe("Output CGST",o.totalCgst,i,r)),o.totalSgst!==0&&l.push(fe("Output SGST",o.totalSgst,i,r))):o.totalIgst!==0&&l.push(fe("Output IGST",o.totalIgst,i,r)),o.totalCess!==0&&l.push(fe("Output Cess",o.totalCess,i,r)),o.roundOff!==0){const d=t?o.roundOff>=0:o.roundOff<0;l.push(fe("Round Off",Math.abs(o.roundOff),d,r))}return l.push("          </VOUCHER>"),l.join(`
`)}function Vo(e,t){!t?.companyName&&!t?.silent&&console.warn(`[tally] toTallyXml: no companyName supplied — falling back to the placeholder "${Sn}". SVCURRENTCOMPANY selects the target books in Tally; import this and the vouchers will not land in the merchant's company. Pass { companyName } from the merchant record.`);const n=t?.companyName??Sn,s=e.map(Bo).join(`
`);return["<ENVELOPE>","  <HEADER>","    <TALLYREQUEST>Import Data</TALLYREQUEST>","  </HEADER>","  <BODY>","    <IMPORTDATA>","      <REQUESTDESC>","        <REPORTNAME>Vouchers</REPORTNAME>","        <STATICVARIABLES>",`          <SVCURRENTCOMPANY>${me(n)}</SVCURRENTCOMPANY>`,"        </STATICVARIABLES>","      </REQUESTDESC>","      <REQUESTDATA>",'        <TALLYMESSAGE xmlns:UDF="TallyUDF">',s,"        </TALLYMESSAGE>","      </REQUESTDATA>","    </IMPORTDATA>","  </BODY>","</ENVELOPE>"].join(`
`)}const Uo=/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;function Vt(e){return Uo.test(e)}class $n extends Error{problems;constructor(t){super(`refunds file: ${t.length} problem(s)
  - ${t.join(`
  - `)}`),this.name="RefundsFileError",this.problems=t}}const nt="shipping";function En(e){const t=e.trim().replace(/[₹,\s]/g,"");if(t!=="")return/^\d+(\.\d+)?$/.test(t)?Number(t):NaN}function Fo(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return!1;const[n,s,o]=[Number(t[1]),Number(t[2]),Number(t[3])],a=new Date(Date.UTC(n,s,0)).getUTCDate();return s>=1&&s<=12&&o>=1&&o<=a}function Rt(e){return e.trim().replace(/^#/,"").toLowerCase()}function qo(e){const t=tt(e);if(t.length===0)return[];const n=t[0].map(h=>h.trim().toLowerCase().replace(/[\s-]+/g,"_")),s=(...h)=>{for(const f of h){const w=n.indexOf(f);if(w>=0)return w}return-1},o=s("order","order_name"),a=s("date","refund_date"),i=s("item","sku"),l=s("quantity","qty"),r=s("amount"),d=s("refund_id"),c=[];if(o<0&&c.push('missing column "order"'),a<0&&c.push('missing column "date"'),l<0&&r<0&&c.push('needs a "quantity" or an "amount" column'),c.length>0)throw new $n(c);const u=new Map;for(let h=1;h<t.length;h++){const f=t[h],w=h+1,x=D=>D>=0?(f[D]??"").trim():"",y=x(o),N=x(a),b=x(i),E=x(l),C=x(r);if(!y&&!N&&!b&&!E&&!C)continue;const A=`row ${w}${y?` (${y})`:""}`,g=c.length;y||c.push(`${A}: no order`);const T=N.slice(0,10);Fo(T)||c.push(`${A}: date ${JSON.stringify(N)} is not a YYYY-MM-DD date`);const m=En(E);m!==void 0&&(Number.isNaN(m)||m<=0)&&c.push(`${A}: quantity ${JSON.stringify(E)} is not a positive number`);const p=En(C);if(p!==void 0&&(Number.isNaN(p)||p<=0)&&c.push(`${A}: amount ${JSON.stringify(C)} is not a positive amount`),m===void 0&&p===void 0&&c.push(`${A}: give a quantity, an amount, or both`),!b&&m!==void 0&&c.push(`${A}: a quantity needs an item (SKU or title) to apply to`),c.length>g)continue;const $=x(d)||T,I=`${Rt(y)}|${$}`;let k=u.get(I);if(!k)k={order:y,date:T,refundId:$,rows:[]},u.set(I,k);else if(k.date!==T){c.push(`${A}: refund_id ${$} is already dated ${k.date}`);continue}k.rows.push({line:w,item:b,quantity:m,amount:p})}for(const h of u.values()){h.rows.filter(y=>y.item==="").length>0&&h.rows.length>1&&c.push(`rows ${h.rows.map(y=>y.line).join(", ")} (${h.order}, ${h.date}): a refund is either one whole-refund amount (blank item) or a list of items, not both`);const w=h.rows.map(y=>y.item.toLowerCase()).filter(Boolean),x=w.find((y,N)=>w.indexOf(y)!==N);x&&c.push(`${h.order}, ${h.date}: item ${JSON.stringify(x)} is listed twice in one refund — put the total on one row`)}if(c.length>0)throw new $n(c);return[...u.values()]}const ze=1;async function Ho(e){const t=[],n=[],s=[],o=r=>!e.period||r.startsWith(e.period),a=new Map(e.csvOrders.map(r=>[Rt(r.name),r])),i=new Map;for(const r of e.refunds){const d=a.get(Rt(r.order));if(!d){o(r.date)&&t.push({orderName:r.order,orderId:"",kind:"refund-unknown-order",detail:`refund dated ${r.date} is for an order that is not in this export. Export a date range that includes the original sale so its invoice can be found`});continue}const c=String(d.payload.id),u=i.get(c)??[];u.push(r),i.set(c,u)}for(const r of e.csvOrders){const d={orderName:r.name,orderId:String(r.payload.id)},c=(i.get(d.orderId)??[]).sort((T,m)=>Se(T.date,m.date)||Se(T.refundId,m.refundId)),u=await e.invoiceRegister.find(e.shop,d.orderId),h=!!(r.cancelledAt&&u);if(c.length===0&&!(r.refundedAmount>0)&&!h)continue;const f=(T,m)=>t.push({...d,kind:T,detail:m}),w=await zo(e,r,d,u);if("skip"in w)continue;if("problem"in w){const T=c.filter(m=>o(m.date));T.length>0&&f("refund-original-missing",`${Ko(T)} cannot be credited: ${w.problem}`);continue}const x=w.invoice,y=jo(r),N=new Map,b=new Map;let E=0,C=0,A=!0;const g=[];for(const T of c){const m=T.rows.every(D=>D.amount!==void 0)?R(T.rows.reduce((D,M)=>D+(M.amount??0),0)):void 0,p=Yo(T,r,x,y,E,b);if("kind"in p){g.push({refund:T,kind:p.kind,detail:p.detail}),m===void 0?A=!1:C+=m;continue}const $=new Map([...N].map(([D,M])=>[D,{quantity:M,amount:b.get(D)??0}]));let I;try{I=zs(x,p.request,{credited:$})}catch(D){const M=D instanceof j?D.reason:"invalid";g.push({refund:T,kind:M==="too-late"?"refund-too-late":M==="exceeds"?"refund-exceeds":"refund-invalid",detail:D.message.replace(/^credit note: /,"")}),m===void 0?A=!1:C+=m;continue}const k=I.totals.grandTotalBeforeRound;if(C+=m??k,E+k>x.totals.grandTotalBeforeRound+ze){g.push({refund:T,kind:"refund-exceeds",detail:`₹${v(E+k)} credited in total would exceed invoice ${x.documentNumber} (₹${v(x.totals.grandTotalBeforeRound)})`});continue}for(const D of I.items)N.set(D.id,(N.get(D.id)??0)+D.quantity),b.set(D.id,R((b.get(D.id)??0)+D.lineTotal));E=R(E+k),g.push({refund:T,creditNote:I})}if(C=R(C),!r.cancelledAt&&A&&C>r.refundedAmount+ze){f("refund-mismatch",`refunds.csv lists ₹${v(C)} refunded on this order, but Shopify recorded ₹${v(r.refundedAmount)}. No credit note is issued until they agree`);continue}if(A&&C<r.refundedAmount-ze){const T=R(r.refundedAmount-C);f("refund-missing",`Shopify recorded ₹${v(r.refundedAmount)} refunded, but refunds.csv accounts for ₹${v(C)}. Add the missing ₹${v(T)} (with its date) — see refunds-needed.csv`),n.push(...Wo(r,x,y,T,c.length===0&&C===0))}h&&c.length===0&&(f("cancelled-after-invoice",`cancelled after invoice ${x.documentNumber} was issued. Reverse it with a credit note: add a whole-refund row for the invoice value to refunds.csv, even if no money was refunded`),n.push({order:r.name,date:(r.cancelledAt??"").slice(0,10),item:"",quantity:"",amount:v(x.totals.grandTotalBeforeRound),refundId:"",note:`cancelled after invoice ${x.documentNumber}: reverses it in full`}));for(const T of g)if(o(T.refund.date)){if(T.kind){f(T.kind,`refund dated ${T.refund.date}: ${T.detail}`),T.kind==="refund-needs-items"&&n.push(...Jo(r,x,y,T.refund));continue}s.push({ref:d,refund:T.refund,refundKey:`${d.orderId}|${T.refund.refundId}`,creditNote:T.creditNote})}}s.sort((r,d)=>Se(r.refund.date,d.refund.date)||Cn(r.ref.orderName)-Cn(d.ref.orderName)||Se(r.refund.refundId,d.refund.refundId));const l=[];for(const r of s){const d=await e.creditNoteRegister.find(e.shop,r.refundKey),c=r.creditNote;if(d){if(Math.abs(d.grandTotal-c.totals.grandTotal)>.005||d.documentDate!==c.documentDate||d.originalDocumentNumber!==c.originalInvoice?.documentNumber){t.push({...r.ref,kind:"refund-changed-since-issued",detail:`refund dated ${r.refund.date} was already credited as ${d.documentNumber} for ₹${v(d.grandTotal)}, but now computes ₹${v(c.totals.grandTotal)}. The issued credit note stands`});continue}c.documentNumber=d.documentNumber,l.push({...r.ref,refundKey:r.refundKey,documentNumber:d.documentNumber,reused:!0,creditNote:c});continue}const u=Qn(c.documentDate,{shop:e.shop,store:e.seriesStore,prefix:e.prefix});c.documentNumber=u.documentNumber;const h={shop:e.shop,orderId:r.refundKey,documentNumber:u.documentNumber,documentDate:c.documentDate,grandTotal:c.totals.grandTotal,originalDocumentNumber:c.originalInvoice.documentNumber};try{await e.creditNoteRegister.save(h)}catch(f){throw u.rollback(),f}l.push({...r.ref,refundKey:r.refundKey,documentNumber:u.documentNumber,reused:!1,creditNote:c})}return l.sort((r,d)=>Se(r.documentNumber,d.documentNumber)),{issued:l,review:t,needed:n}}async function zo(e,t,n,s){const o=e.invoicesByOrderId.get(n.orderId);if(o)return{invoice:o};if(!s){if(t.cancelledAt)return{skip:!0};const l=t.payload.created_at.slice(0,10);return{problem:e.period&&!l.startsWith(e.period)?`the sale (dated ${l}) was never invoiced — commit its own month first`:"the sale has no invoice yet (see its own entry in this file)"}}const a=e.recompute(t);if("problem"in a)return{problem:`invoice ${s.documentNumber} could not be rebuilt from the export: ${a.problem}`};const i=a.invoice;return Math.abs(i.totals.grandTotal-s.grandTotal)>.005||i.documentDate!==s.documentDate?{problem:`the export no longer matches invoice ${s.documentNumber} (₹${v(s.grandTotal)} on record, ₹${v(i.totals.grandTotal)} now)`}:(i.documentNumber=s.documentNumber,{invoice:i})}function jo(e){return new Map(e.payload.line_items.map(t=>[String(t.id),t.sku??""]))}function gt(e){return e.trim().toLowerCase().replace(/\s+/g," ")}function Rn(e,t){return e.items.map(n=>n.id==="shipping"?nt:`${t.get(n.id)||n.description} x${n.quantity} @${n.gstRate}%`).join(", ")}function Yo(e,t,n,s,o,a){const[i]=e.rows;if(e.rows.length===1&&i.item===""){const r=i.amount,d=Hs(n,r,e.date,a);return"request"in d?d:d.refused==="exceeds"?{kind:"refund-exceeds",detail:d.message}:{kind:"refund-needs-items",detail:`₹${v(r)} refunded with no item breakdown, on an order whose items differ in GST rate or HSN (${Rn(n,s)}). List the refunded items in refunds.csv — see refunds-needed.csv`}}const l=[];for(const r of e.rows){let d;if(r.item.toLowerCase()===nt){if(!n.items.some(c=>c.id==="shipping"))return{kind:"refund-invalid",detail:`row ${r.line}: the order had no shipping charge`};d="shipping"}else{const c=gt(r.item),u=t.payload.line_items.filter(f=>f.sku&&gt(f.sku)===c),h=u.length>0?u:t.payload.line_items.filter(f=>gt(f.title)===c);if(h.length===0)return{kind:"refund-invalid",detail:`row ${r.line}: no item ${JSON.stringify(r.item)} on this order (it has ${Rn(n,s)})`};if(h.length>1)return{kind:"refund-invalid",detail:`row ${r.line}: ${JSON.stringify(r.item)} matches more than one line of this order — use the exact title`};d=String(h[0].id)}l.push({lineId:d,quantity:r.quantity,amount:r.amount})}return{request:{date:e.date,lines:l}}}function Wo(e,t,n,s,o){const a=new Set(t.items.map(l=>`${l.gstRate}|${l.cessRate}|${l.hsn}`)).size===1,i=o&&Math.abs(s-t.totals.grandTotalBeforeRound)<=ze;return a||i?[{order:e.name,date:"",item:"",quantity:"",amount:v(s),refundId:"",note:i?"the whole order was refunded: fill in the refund date":"one GST rate and HSN on this order, so the amount alone is enough: fill in the refund date"}]:t.items.map(l=>({order:e.name,date:"",item:l.id==="shipping"?nt:n.get(l.id)||l.description,quantity:"",amount:"",refundId:"",note:`₹${v(s)} refunded across items at different rates: keep the rows for the items refunded, with the date and the quantity (or amount); delete the rest`}))}function Jo(e,t,n,s){return t.items.map(o=>({order:e.name,date:s.date,item:o.id==="shipping"?nt:n.get(o.id)||o.description,quantity:"",amount:"",refundId:s.refundId===s.date?"":s.refundId,note:`replaces the ₹${v(s.rows[0].amount??0)} whole-refund row: keep the items refunded, with the quantity (or amount); delete the rest`}))}function Ko(e){return e.length===1?`the refund dated ${e[0].date}`:`${e.length} refunds`}function Se(e,t){return e<t?-1:e>t?1:0}function Cn(e){const t=/\d+/.exec(e);return t?Number(t[0]):Number.MAX_SAFE_INTEGER}function In(e){return e.startsWith("refund-")||e==="cancelled-after-invoice"}const On=16,Xo=/^[A-Za-z0-9-]+$/,Zo=/^\d{4}-(0[1-9]|1[0-2])$/;async function Qo(e){const t=e.seriesPrefix??"INV";Dn(t);const n=e.creditNotePrefix??"CN";if(Dn(n),n.toUpperCase()===t.toUpperCase())throw new Error(`credit notes need their own series: the credit-note prefix must differ from the invoice prefix ${JSON.stringify(t)}`);if(e.period!==void 0&&!Zo.test(e.period))throw new Error(`period ${JSON.stringify(e.period)} must look like "2026-09"`);for(const[y,N]of e.buyerGstins??[])if(!Vt(N))throw new Error(`buyer GSTIN for order ${y}: ${JSON.stringify(N)} is not a valid GSTIN`);const s=aa(e.ordersCsv),o=[],a=[],i=new Map,l=[];s.forEach((y,N)=>{const b={orderName:y.name,orderId:String(y.payload.id)};if(y.cancelledAt){a.push({...b,reason:"cancelled",detail:`cancelled ${y.cancelledAt}`});return}const E=y.payload.created_at.slice(0,10);if(e.period&&/^\d{4}-\d{2}/.test(E)&&!E.startsWith(e.period)){a.push({...b,reason:"outside-period",detail:`dated ${E}`});return}const C=An(y,e,i);if("reasons"in C){for(const A of C.reasons)o.push({...b,...A});return}l.push({ref:b,invoice:C.invoice,index:N})}),l.sort((y,N)=>Ue(y.invoice.documentDate,N.invoice.documentDate)||kn(y.ref.orderName)-kn(N.ref.orderName)||y.index-N.index);const r=[];for(const{ref:y,invoice:N}of l){const b=await e.register.find(e.shop,y.orderId);if(b){if(Math.abs(b.grandTotal-N.totals.grandTotal)>.005||b.documentDate!==N.documentDate){o.push({...y,kind:"changed-since-issued",detail:`already invoiced as ${b.documentNumber} dated ${b.documentDate} for ₹${v(b.grandTotal)}, but the export now gives ₹${v(N.totals.grandTotal)} dated ${N.documentDate}. The issued invoice stands; a difference needs a credit or debit note`});continue}N.documentNumber=b.documentNumber,r.push({...y,documentNumber:b.documentNumber,reused:!0,invoice:N});continue}const E=Qn(N.documentDate,{shop:e.shop,store:e.seriesStore,prefix:t});N.documentNumber=E.documentNumber;const C={shop:e.shop,orderId:y.orderId,documentNumber:E.documentNumber,documentDate:N.documentDate,grandTotal:N.totals.grandTotal};try{await e.register.save(C)}catch(A){throw E.rollback(),A}r.push({...y,documentNumber:E.documentNumber,reused:!1,invoice:N})}r.sort((y,N)=>Ue(y.documentNumber,N.documentNumber));for(const y of o){if(y.kind==="changed-since-issued")continue;const N=await e.register.find(e.shop,y.orderId);N&&(y.detail+=` (already invoiced as ${N.documentNumber} in an earlier run — that invoice stands)`)}const d=await Ho({csvOrders:s,refunds:e.refunds??[],period:e.period,shop:e.shop,seriesStore:e.seriesStore,prefix:n,invoiceRegister:e.register,creditNoteRegister:e.creditNoteRegister,invoicesByOrderId:new Map(r.map(y=>[y.orderId,y.invoice])),recompute:y=>{const N=An(y,e,i);return"invoice"in N?N:{problem:N.reasons.map(b=>b.detail).join("; ")}}}),c=d.issued;o.push(...d.review);const u=[...i.values()].sort((y,N)=>Ue(y.sku,N.sku)||Ue(y.title,N.title)),h=e.b2clThreshold??le,f=d.needed,w=sr({issued:r,creditNotes:c,review:o,missingCatalogue:u,refundsNeeded:f,opts:e,threshold:h}),x=or({opts:e,csvOrders:s,issued:r,creditNotes:c,review:o,skipped:a,missingCatalogue:u,refundsNeeded:f,threshold:h});return w.set("SUMMARY.txt",x),{issued:r,creditNotes:c,review:o,refundsNeeded:f,skipped:a,missingCatalogue:u,files:w,summary:x}}function An(e,t,n){const s=e.problems.map(a=>({kind:"export-data",detail:a})),o=e.payload.line_items.filter(a=>!t.catalogue.lookup(a));for(const a of o)tr(n,a,e.name);if(o.length>0&&s.push({kind:"missing-catalogue",detail:"no HSN / GST rate in the catalogue for "+o.map(a=>a.sku?`${a.sku} (${a.title})`:`"${a.title}"`).join(", ")}),s.length>0)return{reasons:s};try{const a=Ns(e.payload,{seller:t.seller,buyerGstin:er(t.buyerGstins,e.name),hsnFor:l=>t.catalogue.lookup(l)?.hsn??"",gstRateFor:l=>t.catalogue.lookup(l)?.gstRate??NaN,supplyTypeFor:l=>t.catalogue.lookup(l)?.nonTaxable,strictCatalogue:!0,pricesIncludeTax:t.pricesIncludeTax}),i=Ps(a);return $s(i,e.payload,{tolerance:t.reconcileTolerance}),{invoice:i}}catch(a){return{reasons:[nr(a,e,t.pricesIncludeTax)]}}}function Ue(e,t){return e<t?-1:e>t?1:0}function kn(e){const t=/\d+/.exec(e);return t?Number(t[0]):Number.MAX_SAFE_INTEGER}function er(e,t){return e?.get(t)??e?.get(t.replace(/^#/,""))}function Dn(e){if(!Xo.test(e))throw new Error(`invoice prefix ${JSON.stringify(e)} may contain only letters, digits and hyphens (Rule 46(b))`);const t=`${e}/2026-27/0001`;if(t.length>On)throw new Error(`invoice prefix ${JSON.stringify(e)} is too long: numbers would look like "${t}" (${t.length} characters) and Rule 46(b) allows at most ${On}`)}function tr(e,t,n){const s=t.sku?`sku:${t.sku.toUpperCase()}`:`title:${t.title.toLowerCase()}`,o=e.get(s);o?o.orders.includes(n)||o.orders.push(n):e.set(s,{sku:t.sku??"",title:t.title,orders:[n]})}function nr(e,t,n){if(e instanceof Ce)return{kind:e.field.includes("address")?"place-of-supply":"invalid",detail:e.message.split(" — ").slice(1).join(" — ")||e.message};if(e instanceof yt)return{kind:"currency",detail:`priced in ${e.currency}; only INR orders can be invoiced`};if(e instanceof na){const{computedTotal:s,expectedTotal:o,difference:a}=e.result;let i=`computed invoice total ₹${v(s)} does not match Shopify's Total ₹${v(o??NaN)} (difference ₹${v(a)})`;const l=ar(t,n);return l&&(i+=`. ${l}`),!l&&t.refundedAmount>0&&Math.abs(s-(t.exported.total+t.refundedAmount))<=1&&(i+=`. Shopify's Total plus the ₹${v(t.refundedAmount)} refunded matches the computed total — the export may show this order net of its refund`),{kind:"total-mismatch",detail:i}}return{kind:"invalid",detail:e instanceof Error?e.message:String(e)}}function ar(e,t){const{subtotal:n,shipping:s,taxes:o,total:a}=e.exported;if(!(o>0))return;const i=Math.abs(n+s+o-a)<=.01,l=Math.abs(n+s-a)<=.01;if(t&&i&&!l)return"Shopify's Total = Subtotal + Shipping + Taxes, so this store's prices EXCLUDE GST, but the pack was run treating them as GST-inclusive";if(!t&&l&&!i)return"Shopify's Total = Subtotal + Shipping, so this store's prices INCLUDE GST, but the pack was run treating them as pre-tax"}function Mn(e){return`₹${e.toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function Ln(e){return e.replace(/\//g,"-").replace(/[^A-Za-z0-9._-]/g,"_")}function sr(e){const{issued:t,creditNotes:n,review:s,missingCatalogue:o,refundsNeeded:a,opts:i,threshold:l}=e,r=new Map,d=t.map(f=>f.invoice),c=n.map(f=>f.creditNote),u=[...d,...c],h=i.preview===!0;for(const f of t)r.set(`invoices/${Ln(f.documentNumber)}.html`,cn(f.invoice,{specimen:h}));for(const f of n)r.set(`credit-notes/${Ln(f.documentNumber)}.html`,cn(f.creditNote,{specimen:h}));for(const[f,w]of Lo(u,{threshold:l}))r.set(`gstr1/${f}`,w);if(i.period&&i.seller.gstin){const f=Po({seller:i.seller,period:i.period,documents:u,threshold:l});r.set("gstr1/gstr1.json",`${JSON.stringify(f,null,2)}
`)}return r.set("tally/sales-vouchers.xml",Vo(u,{companyName:i.tallyCompanyName??i.seller.legalName})),r.set("invoice-register.csv",F([["Invoice Number","Invoice Date","Shopify Order","Shopify Order Id","Customer","Customer GSTIN","Supply Type","Place of Supply","Taxable Value","Central Tax","State/UT Tax","Integrated Tax","Cess","Round Off","Invoice Value","Issued In"],...t.map(f=>Pn(f.documentNumber,f.invoice,f.orderName,f.orderId,f.reused))])),r.set("credit-note-register.csv",F([["Credit Note Number","Credit Note Date","Original Invoice Number","Original Invoice Date","Shopify Order","Shopify Order Id","Customer","Customer GSTIN","Supply Type","Place of Supply","Taxable Value","Central Tax","State/UT Tax","Integrated Tax","Cess","Round Off","Note Value","Issued In"],...n.map(f=>{const[w,x,...y]=Pn(f.documentNumber,f.creditNote,f.orderName,f.orderId,f.reused),N=f.creditNote.originalInvoice;return[w,x,N.documentNumber,Z(N.documentDate),...y]})])),r.set("review.csv",F([["Shopify Order","Shopify Order Id","Issue","Detail"],...s.map(f=>[f.orderName,f.orderId,f.kind,f.detail])])),r.set("catalogue-missing.csv",F([["sku","title","hsn","gst_rate","supply_type","orders"],...o.map(f=>[f.sku,f.title,"","","",f.orders.join(" ")])])),r.set("refunds-needed.csv",F([["order","date","item","quantity","amount","refund_id","note"],...a.map(f=>[f.order,f.date,f.item,f.quantity,f.amount,f.refundId,f.note])])),r}function Pn(e,t,n,s,o){const a=t.totals;return[e,Z(t.documentDate),n,s,t.buyer.legalName,t.buyer.gstin??"",t.supplyType,te(t.placeOfSupply),v(a.totalTaxableValue),v(a.totalCgst),v(a.totalSgst),v(a.totalIgst),v(a.totalCess),v(a.roundOff),v(a.grandTotal),o?"earlier run":"this run"]}function or(e){const{opts:t,csvOrders:n,issued:s,creditNotes:o,review:a,skipped:i,missingCatalogue:l,refundsNeeded:r,threshold:d}=e,c=[],u=(m,p)=>Mn(O(m.map(p))),h=(m,p,$)=>{c.push(`  Numbers:             ${$[0]} to ${$[$.length-1]}`),c.push(`  Taxable value:       ${u(p,I=>I.totals.totalTaxableValue)}`),c.push(`  Central tax (CGST):  ${u(p,I=>I.totals.totalCgst)}`),c.push(`  State tax (SGST):    ${u(p,I=>I.totals.totalSgst)}`),c.push(`  Integrated (IGST):   ${u(p,I=>I.totals.totalIgst)}`),c.push(`  Cess:                ${u(p,I=>I.totals.totalCess)}`),c.push(`  ${m}${u(p,I=>I.totals.grandTotal)}`)};t.preview&&c.push("*** PREVIEW — nothing has been issued. ***","Invoices and credit notes are watermarked SPECIMEN and the numbers below are NOT reserved.","Fix what review.csv lists, then re-run with --commit to issue them.",""),c.push(`GST pack — ${t.seller.legalName} (GSTIN ${t.seller.gstin??"not set"})`,"");const f=n.map(m=>m.payload.created_at.slice(0,10)).filter(m=>/^\d{4}-\d{2}-\d{2}$/.test(m)).sort();c.push(`Orders in the export:  ${n.length}`+(f.length?` (dated ${f[0]} to ${f[f.length-1]})`:"")),c.push(`Period:                ${t.period??"every order in the export"}`),c.push(`Prices:                ${t.pricesIncludeTax?"include GST (tax backed out of each price)":"exclude GST (tax added on top)"}`),c.push(`Refunds listed:        ${(t.refunds??[]).length}`),c.push("");const w=s.map(m=>m.invoice),x=s.filter(m=>!m.reused).length;c.push(`Invoices:              ${s.length} (${x} numbered in this run, ${s.length-x} already issued earlier)`),s.length>0&&h("Invoice value:       ",w,s.map(m=>m.documentNumber)),c.push("");const y=o.map(m=>m.creditNote),N=o.filter(m=>!m.reused).length;c.push(`Credit notes:          ${o.length} (${N} numbered in this run, ${o.length-N} already issued earlier)`),o.length>0&&h("Credited value:      ",y,o.map(m=>m.documentNumber)),c.push("");const b=new Set(a.filter(m=>!In(m.kind)).map(m=>m.orderName)).size,E=a.filter(m=>In(m.kind)).length;c.push(`Needs review:          ${b} order(s) got NO invoice; ${E} refund issue(s) got NO credit note.`),c.push("                       See review.csv."),a.filter(m=>m.kind==="total-mismatch").length>0&&s.length===0&&(c.push("  Every order that reached the Total check failed it. The likeliest cause is the"),c.push("  prices setting: re-run with the other one (GST-inclusive vs pre-tax)."));const A=i.filter(m=>m.reason==="cancelled").length,g=i.filter(m=>m.reason==="outside-period").length;c.push(`Skipped:               ${A} cancelled, ${g} outside the period`),l.length>0&&c.push(`Missing from catalogue: ${l.length} product(s) — fill in catalogue-missing.csv and add it to the catalogue`),r.length>0&&c.push(`Refunds to record:     ${r.length} row(s) in refunds-needed.csv — complete them and add them to refunds.csv`),c.push(""),!t.period&&f.length>0&&f[0].slice(0,7)!==f[f.length-1].slice(0,7)&&(c.push("WARNING: the export spans more than one month, and GSTR-1 is filed month by month."),c.push("         Run once per month with --period YYYY-MM.",""));const T=Ke([...w,...y],{threshold:d}).filter(m=>m.taxableValue<0);return T.length>0&&(c.push(`WARNING: ${T.length} B2CS row(s) are NEGATIVE — returns this month exceed sales for that state`),c.push("         and rate. The portal may not accept a negative Table 7 value; your CA may need to"),c.push("         amend the earlier month instead (Table 10).","")),y.some(m=>m.buyer.gstin)&&(c.push("NOTE: credit notes to registered buyers (gstr1/cdnr.csv) reach them through IMS. If a buyer"),c.push("      rejects one there, the reduction in your tax does not hold — check with them.","")),c.push(`B2CL threshold used:   ${Mn(d)} invoice value. This limit is set by notification and has`),c.push("                       changed before — confirm the figure for this return period."),c.push(""),c.push("Not covered — handle by hand:"),c.push("  - Refunds need dates and, on orders with mixed GST rates, the items refunded. Shopify"),c.push("    exports neither, so they come from refunds.csv; refunds-needed.csv lists what is missing."),c.push("  - gstr1/gstr1.json (written only with --period) is the return as the GST portal's JSON"),c.push("    upload. Check what the offline tool or the portal reports for it before filing. The"),c.push("    gstr1/*.csv files are the same tables as worksheets to read, not an import template."),c.push("  - Exports (gstr1/exp.csv): add the port code and shipping bill number and date."),c.push("  - e-Invoicing: no IRN is generated or registered, for invoices or credit notes."),c.push(""),c.join(`
`)}class Ta extends Error{problems;constructor(t){super(t.map(n=>`${n.field} ${n.problem}`).join("; ")),this.name="SellerConfigError",this.problems=t}}const rr=["legalName","gstin","addressLine1","location","pincode"],ir=["tradeName","addressLine2","phone","email"];function lr(e){const t=i=>{const l=e[i];return(typeof l=="number"?String(l):typeof l=="string"?l.trim():"")||void 0},n=[];for(const i of rr)t(i)||n.push({field:i,problem:"is required"});const s=t("gstin")?.toUpperCase();let o=t("stateCode");if(s&&!Vt(s)?n.push({field:"gstin",problem:`${JSON.stringify(s)} is not a valid GSTIN`}):s&&(o??=s.slice(0,2),We(o)?s.slice(0,2)!==o&&n.push({field:"stateCode",problem:`${o} does not match the GSTIN's state (${s.slice(0,2)})`}):n.push({field:"stateCode",problem:`${JSON.stringify(o)} is not a GST state code`})),n.length>0)throw new Ta(n);const a={legalName:t("legalName"),gstin:s,stateCode:o,addressLine1:t("addressLine1"),location:t("location"),pincode:t("pincode")};for(const i of ir){const l=t(i);l&&(a[i]=l)}return{seller:a,shop:t("shop")??s,tallyCompanyName:t("tallyCompanyName")}}function cr(e){const t=tt(e),n=(t[0]??[]).map(i=>i.trim().toLowerCase()),s=n.indexOf("order"),o=n.indexOf("gstin");if(s<0||o<0)throw new Error('buyer GSTIN file needs "order" and "gstin" columns');const a=new Map;for(const i of t.slice(1)){const l=(i[s]??"").trim(),r=(i[o]??"").trim().toUpperCase();!l&&!r||a.set(l,r)}return a}var J=Uint8Array,Q=Uint16Array,Ut=Int32Array,Ft=new J([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),qt=new J([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),_n=new J([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),wa=function(e,t){for(var n=new Q(31),s=0;s<31;++s)n[s]=t+=1<<e[s-1];for(var o=new Ut(n[30]),s=1;s<30;++s)for(var a=n[s];a<n[s+1];++a)o[a]=a-n[s]<<5|s;return{b:n,r:o}},Na=wa(Ft,2),dr=Na.b,Ct=Na.r;dr[28]=258,Ct[258]=28;var ur=wa(qt,0),Gn=ur.r,It=new Q(32768);for(var U=0;U<32768;++U){var ue=(U&43690)>>1|(U&21845)<<1;ue=(ue&52428)>>2|(ue&13107)<<2,ue=(ue&61680)>>4|(ue&3855)<<4,It[U]=((ue&65280)>>8|(ue&255)<<8)>>1}var ke=(function(e,t,n){for(var s=e.length,o=0,a=new Q(t);o<s;++o)e[o]&&++a[e[o]-1];var i=new Q(t);for(o=1;o<t;++o)i[o]=i[o-1]+a[o-1]<<1;var l;if(n){l=new Q(1<<t);var r=15-t;for(o=0;o<s;++o)if(e[o])for(var d=o<<4|e[o],c=t-e[o],u=i[e[o]-1]++<<c,h=u|(1<<c)-1;u<=h;++u)l[It[u]>>r]=d}else for(l=new Q(s),o=0;o<s;++o)e[o]&&(l[o]=It[i[e[o]-1]++]>>15-e[o]);return l}),ve=new J(288);for(var U=0;U<144;++U)ve[U]=8;for(var U=144;U<256;++U)ve[U]=9;for(var U=256;U<280;++U)ve[U]=7;for(var U=280;U<288;++U)ve[U]=8;var Xe=new J(32);for(var U=0;U<32;++U)Xe[U]=5;var pr=ke(ve,9,0),mr=ke(Xe,5,0),xa=function(e){return(e+7)/8|0},Sa=function(e,t,n){return(n==null||n>e.length)&&(n=e.length),new J(e.subarray(t,n))},hr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],at=function(e,t,n){var s=new Error(t||hr[e]);if(s.code=e,Error.captureStackTrace&&Error.captureStackTrace(s,at),!n)throw s;return s},re=function(e,t,n){n<<=t&7;var s=t/8|0;e[s]|=n,e[s+1]|=n>>8},$e=function(e,t,n){n<<=t&7;var s=t/8|0;e[s]|=n,e[s+1]|=n>>8,e[s+2]|=n>>16},vt=function(e,t){for(var n=[],s=0;s<e.length;++s)e[s]&&n.push({s,f:e[s]});var o=n.length,a=n.slice();if(!o)return{t:Ea,l:0};if(o==1){var i=new J(n[0].s+1);return i[n[0].s]=1,{t:i,l:1}}n.sort(function(A,g){return A.f-g.f}),n.push({s:-1,f:25001});var l=n[0],r=n[1],d=0,c=1,u=2;for(n[0]={s:-1,f:l.f+r.f,l,r};c!=o-1;)l=n[n[d].f<n[u].f?d++:u++],r=n[d!=c&&n[d].f<n[u].f?d++:u++],n[c++]={s:-1,f:l.f+r.f,l,r};for(var h=a[0].s,s=1;s<o;++s)a[s].s>h&&(h=a[s].s);var f=new Q(h+1),w=Ot(n[c-1],f,0);if(w>t){var s=0,x=0,y=w-t,N=1<<y;for(a.sort(function(g,T){return f[T.s]-f[g.s]||g.f-T.f});s<o;++s){var b=a[s].s;if(f[b]>t)x+=N-(1<<w-f[b]),f[b]=t;else break}for(x>>=y;x>0;){var E=a[s].s;f[E]<t?x-=1<<t-f[E]++-1:++s}for(;s>=0&&x;--s){var C=a[s].s;f[C]==t&&(--f[C],++x)}w=t}return{t:new J(f),l:w}},Ot=function(e,t,n){return e.s==-1?Math.max(Ot(e.l,t,n+1),Ot(e.r,t,n+1)):t[e.s]=n},Bn=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new Q(++t),s=0,o=e[0],a=1,i=function(r){n[s++]=r},l=1;l<=t;++l)if(e[l]==o&&l!=t)++a;else{if(!o&&a>2){for(;a>138;a-=138)i(32754);a>2&&(i(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(i(o),--a;a>6;a-=6)i(8304);a>2&&(i(a-3<<5|8208),a=0)}for(;a--;)i(o);a=1,o=e[l]}return{c:n.subarray(0,s),n:t}},Ee=function(e,t){for(var n=0,s=0;s<t.length;++s)n+=e[s]*t[s];return n},$a=function(e,t,n){var s=n.length,o=xa(t+2);e[o]=s&255,e[o+1]=s>>8,e[o+2]=e[o]^255,e[o+3]=e[o+1]^255;for(var a=0;a<s;++a)e[o+a+4]=n[a];return(o+4+s)*8},Vn=function(e,t,n,s,o,a,i,l,r,d,c){re(t,c++,n),++o[256];for(var u=vt(o,15),h=u.t,f=u.l,w=vt(a,15),x=w.t,y=w.l,N=Bn(h),b=N.c,E=N.n,C=Bn(x),A=C.c,g=C.n,T=new Q(19),m=0;m<b.length;++m)++T[b[m]&31];for(var m=0;m<A.length;++m)++T[A[m]&31];for(var p=vt(T,7),$=p.t,I=p.l,k=19;k>4&&!$[_n[k-1]];--k);var D=d+5<<3,M=Ee(o,ve)+Ee(a,Xe)+i,_=Ee(o,h)+Ee(a,x)+i+14+3*k+Ee(T,$)+2*T[16]+3*T[17]+7*T[18];if(r>=0&&D<=M&&D<=_)return $a(t,c,e.subarray(r,r+d));var V,G,K,ne;if(re(t,c,1+(_<M)),c+=2,_<M){V=ke(h,f,0),G=h,K=ke(x,y,0),ne=x;var xe=ke($,I,0);re(t,c,E-257),re(t,c+5,g-1),re(t,c+10,k-4),c+=14;for(var m=0;m<k;++m)re(t,c+3*m,$[_n[m]]);c+=3*k;for(var ee=[b,A],he=0;he<2;++he)for(var X=ee[he],m=0;m<X.length;++m){var ae=X[m]&31;re(t,c,xe[ae]),c+=$[ae],ae>15&&(re(t,c,X[m]>>5&127),c+=X[m]>>12)}}else V=pr,G=ve,K=mr,ne=Xe;for(var m=0;m<l;++m){var Y=s[m];if(Y>255){var ae=Y>>18&31;$e(t,c,V[ae+257]),c+=G[ae+257],ae>7&&(re(t,c,Y>>23&31),c+=Ft[ae]);var be=Y&31;$e(t,c,K[be]),c+=ne[be],be>3&&($e(t,c,Y>>5&8191),c+=qt[be])}else $e(t,c,V[Y]),c+=G[Y]}return $e(t,c,V[256]),c+G[256]},fr=new Ut([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ea=new J(0),gr=function(e,t,n,s,o,a){var i=a.z||e.length,l=new J(s+i+5*(1+Math.ceil(i/7e3))+o),r=l.subarray(s,l.length-o),d=a.l,c=(a.r||0)&7;if(t){c&&(r[0]=a.r>>3);for(var u=fr[t-1],h=u>>13,f=u&8191,w=(1<<n)-1,x=a.p||new Q(32768),y=a.h||new Q(w+1),N=Math.ceil(n/3),b=2*N,E=function(it){return(e[it]^e[it+1]<<N^e[it+2]<<b)&w},C=new Ut(25e3),A=new Q(288),g=new Q(32),T=0,m=0,p=a.i||0,$=0,I=a.w||0,k=0;p+2<i;++p){var D=E(p),M=p&32767,_=y[D];if(x[M]=_,y[D]=M,I<=p){var V=i-p;if((T>7e3||$>24576)&&(V>423||!d)){c=Vn(e,r,0,C,A,g,m,$,k,p-k,c),$=T=m=0,k=p;for(var G=0;G<286;++G)A[G]=0;for(var G=0;G<30;++G)g[G]=0}var K=2,ne=0,xe=f,ee=M-_&32767;if(V>2&&D==E(p-ee))for(var he=Math.min(h,V)-1,X=Math.min(32767,p),ae=Math.min(258,V);ee<=X&&--xe&&M!=_;){if(e[p+K]==e[p+K-ee]){for(var Y=0;Y<ae&&e[p+Y]==e[p+Y-ee];++Y);if(Y>K){if(K=Y,ne=ee,Y>he)break;for(var be=Math.min(ee,Y-2),Yt=0,G=0;G<be;++G){var ot=p-ee+G&32767,Va=x[ot],Wt=ot-Va&32767;Wt>Yt&&(Yt=Wt,_=ot)}}}M=_,_=x[M],ee+=M-_&32767}if(ne){C[$++]=268435456|Ct[K]<<18|Gn[ne];var Jt=Ct[K]&31,Kt=Gn[ne]&31;m+=Ft[Jt]+qt[Kt],++A[257+Jt],++g[Kt],I=p+K,++T}else C[$++]=e[p],++A[e[p]]}}for(p=Math.max(p,I);p<i;++p)C[$++]=e[p],++A[e[p]];c=Vn(e,r,d,C,A,g,m,$,k,p-k,c),d||(a.r=c&7|r[c/8|0]<<3,c-=7,a.h=y,a.p=x,a.i=p,a.w=I)}else{for(var p=a.w||0;p<i+d;p+=65535){var rt=p+65535;rt>=i&&(r[c/8|0]=d,rt=i),c=$a(r,c+1,e.subarray(p,rt))}a.i=i}return Sa(l,0,s+xa(c)+o)},vr=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,s=9;--s;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),br=function(){var e=-1;return{p:function(t){for(var n=e,s=0;s<t.length;++s)n=vr[n&255^t[s]]^n>>>8;e=n},d:function(){return~e}}},yr=function(e,t,n,s,o){if(!o&&(o={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),i=new J(a.length+e.length);i.set(a),i.set(e,a.length),e=i,o.w=a.length}return gr(e,t.level==null?6:t.level,t.mem==null?o.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,s,o)},Ra=function(e,t){var n={};for(var s in e)n[s]=e[s];for(var s in t)n[s]=t[s];return n},z=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8};function Tr(e,t){return yr(e,t||{},0,0)}var Ca=function(e,t,n,s){for(var o in e){var a=e[o],i=t+o,l=s;Array.isArray(a)&&(l=Ra(s,a[1]),a=a[0]),a instanceof J?n[i]=[a,l]:(n[i+="/"]=[new J(0),l],Ca(a,i,n,s))}},Un=typeof TextEncoder<"u"&&new TextEncoder,wr=typeof TextDecoder<"u"&&new TextDecoder,Nr=0;try{wr.decode(Ea,{stream:!0}),Nr=1}catch{}function At(e,t){var n;if(Un)return Un.encode(e);for(var s=e.length,o=new J(e.length+(e.length>>1)),a=0,i=function(d){o[a++]=d},n=0;n<s;++n){if(a+5>o.length){var l=new J(a+8+(s-n<<1));l.set(o),o=l}var r=e.charCodeAt(n);r<128||t?i(r):r<2048?(i(192|r>>6),i(128|r&63)):r>55295&&r<57344?(r=65536+(r&1047552)|e.charCodeAt(++n)&1023,i(240|r>>18),i(128|r>>12&63),i(128|r>>6&63),i(128|r&63)):(i(224|r>>12),i(128|r>>6&63),i(128|r&63))}return Sa(o,0,a)}var kt=function(e){var t=0;if(e)for(var n in e){var s=e[n].length;s>65535&&at(9),t+=s+4}return t},Fn=function(e,t,n,s,o,a,i,l){var r=s.length,d=n.extra,c=l&&l.length,u=kt(d);z(e,t,i!=null?33639248:67324752),t+=4,i!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=o&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var h=new Date(n.mtime==null?Date.now():n.mtime),f=h.getFullYear()-1980;if((f<0||f>119)&&at(10),z(e,t,f<<25|h.getMonth()+1<<21|h.getDate()<<16|h.getHours()<<11|h.getMinutes()<<5|h.getSeconds()>>1),t+=4,a!=-1&&(z(e,t,n.crc),z(e,t+4,a<0?-a-2:a),z(e,t+8,n.size)),z(e,t+12,r),z(e,t+14,u),t+=16,i!=null&&(z(e,t,c),z(e,t+6,n.attrs),z(e,t+10,i),t+=14),e.set(s,t),t+=r,u)for(var w in d){var x=d[w],y=x.length;z(e,t,+w),z(e,t+2,y),e.set(x,t+4),t+=4+y}return c&&(e.set(l,t),t+=c),t},xr=function(e,t,n,s,o){z(e,t,101010256),z(e,t+8,n),z(e,t+10,n),z(e,t+12,s),z(e,t+16,o)};function Sr(e,t){t||(t={});var n={},s=[];Ca(e,"",n,t);var o=0,a=0;for(var i in n){var l=n[i],r=l[0],d=l[1],c=d.level==0?0:8,u=At(i),h=u.length,f=d.comment,w=f&&At(f),x=w&&w.length,y=kt(d.extra);h>65535&&at(11);var N=c?Tr(r,d):r,b=N.length,E=br();E.p(r),s.push(Ra(d,{size:r.length,crc:E.d(),c:N,f:u,m:w,u:h!=i.length||w&&f.length!=x,o,compression:c})),o+=30+h+y+b,a+=76+2*(h+y)+(x||0)+b}for(var C=new J(a+22),A=o,g=a-o,T=0;T<s.length;++T){var u=s[T];Fn(C,u.o,u,u.f,u.u,u.c.length);var m=30+u.f.length+kt(u.extra);C.set(u.c,u.o+m),Fn(C,o,u,u.f,u.u,u.c.length,u.o,u.m),o+=16+m+(u.m?u.m.length:0)}return xr(C,o,s.length,g,A),C}function $r(e){const t=aa(e),n=new Set,s=new Map;for(const o of t){const a=o.payload.created_at.slice(0,7);/^\d{4}-\d{2}$/.test(a)&&n.add(a);for(const i of o.payload.line_items){const l=(i.sku??"").trim(),r=i.title.trim(),d=l?`sku:${Ne("sku",l)}`:`title:${Ne("title",r)}`,c=s.get(d)??{key:d,sku:l,title:r,orders:[]};c.orders.includes(o.name)||c.orders.push(o.name),s.set(d,c)}}return{orderCount:t.length,months:[...n].sort(),products:[...s.values()]}}function Ia(e){const t=e.filter(n=>n.hsn.trim()||n.rate.trim()||n.supply);return F([["sku","title","hsn","gst_rate","supply_type"],...t.map(n=>[n.sku,n.title,n.hsn.trim(),n.rate.trim(),n.supply])])}function Oa(e,t){const n=new Map(t.rows().map(i=>[`${i.kind}:${Ne(i.kind,i.label)}`,i])),s=new Set,o=new Map;for(const i of e){const r=[i.sku?`sku:${Ne("sku",i.sku)}`:"",`title:${Ne("title",i.title)}`].find(d=>d&&n.has(d));r&&(s.add(r),o.set(i.key,{sku:i.sku,title:i.title,...qn(n.get(r))}))}const a=[...n].filter(([i])=>!s.has(i)).map(([,i])=>({sku:i.kind==="sku"?i.label:"",title:i.kind==="title"?i.label:"",...qn(i)}));return{matched:o,others:a}}function qn(e){return e.nonTaxable?{hsn:e.hsn,rate:"",supply:Dt[e.nonTaxable]}:{hsn:e.hsn,rate:String(e.gstRate),supply:""}}const Er={legalName:"Legal name",tradeName:"Trade name",gstin:"GSTIN",stateCode:"State",addressLine1:"Address",location:"City",pincode:"PIN code"};async function Rr(e){const t=[],n=(r,d)=>{try{return r()}catch(c){t.push(...d(c));return}},s=n(()=>lr(e.seller),r=>r instanceof Ta?r.problems.map(d=>`${Er[d.field]??d.field} ${d.problem}`):[r.message]),o=n(()=>Kn(Ia(e.catalogue)),r=>r instanceof Oe?r.problems.map(d=>`Products: ${d}`):[r.message]),a=e.refundsCsv?n(()=>qo(e.refundsCsv),r=>[`Refunds file: ${r.message}`]):void 0,i=e.buyerGstinsCsv?n(()=>cr(e.buyerGstinsCsv),r=>[`Buyer GSTIN file: ${r.message}`]):void 0;if(t.length>0||!s||!o)return{ok:!1,problems:t};const l=fs(void 0,s.shop);try{return{ok:!0,pack:await Qo({ordersCsv:e.ordersCsv,catalogue:o,seller:s.seller,shop:s.shop,pricesIncludeTax:e.pricesIncludeTax,seriesStore:l.seriesStore,register:l.register,creditNoteRegister:l.creditNoteRegister,refunds:a,period:e.period||void 0,buyerGstins:i,preview:!0})}}catch(r){return{ok:!1,problems:[r.message]}}}const Cr={"export-data":"Export data problem","missing-catalogue":"Product needs an HSN code and rate","place-of-supply":"Delivery state unclear",currency:"Not in rupees","total-mismatch":"Total doesn't match Shopify's","changed-since-issued":"Changed after it was invoiced",invalid:"Could not be invoiced","refund-missing":"Refund not in the refunds file","refund-mismatch":"Refund doesn't match Shopify's","refund-needs-items":"Refund needs its items","refund-invalid":"Refund row is invalid","refund-too-late":"Too late for a credit note","refund-exceeds":"Refund is more than the invoice","refund-original-missing":"Refunded order has no invoice","refund-unknown-order":"Refund for an order not in the export","refund-changed-since-issued":"Refund changed after its credit note","cancelled-after-invoice":"Cancelled after it was invoiced"};function Ir(e,t,n){const s={};for(const[o,a]of e)s[`${t}/${o}`]=At(a);return Sr(s,{mtime:n})}const Ht=["legalName","tradeName","gstin","addressLine1","location","pincode"],Or={refunds:{name:"refunds.csv",csv:`order,date,item,quantity,amount,refund_id\r
`},buyers:{name:"buyer-gstins.csv",csv:`order,gstin\r
`}};function L(e){const t=document.getElementById(e);if(!t)throw new Error(`the page is missing #${e}`);return t}const Ze=L("pack-form"),Hn=L("orders"),Ie=L("orders-status"),je=L("period"),Aa=L("gstin"),Re=L("gstin-state"),bt=L("catalogue-file"),we=L("catalogue-status"),ka=L("save-catalogue"),Ar=L("products-empty"),Da=L("products"),st=Da.tBodies[0],zn=L("refunds"),jn=L("buyers"),Fe=L("problems"),qe=Ze.querySelector('button[type="submit"]'),Ye=L("results"),B={otherProducts:[],usingSample:!1};let ie;Hn.addEventListener("change",async()=>{const e=Hn.files?.[0];e&&(B.usingSample&&jt(),Ma(await e.text(),e.name))});function Ma(e,t){try{B.overview=$r(e),B.ordersCsv=e}catch(a){B.overview=void 0,B.ordersCsv=void 0,Ie.textContent=`${t} could not be read as a Shopify order export: ${a.message}`,Ie.dataset.tone="bad",Qe();return}const{orderCount:n,products:s,months:o}=B.overview;Ie.textContent=`${t}: ${et(n,"order")}, ${et(s.length,"product")}.`,Ie.dataset.tone="good",je.replaceChildren(new Option("All orders in the file",""));for(const a of o)je.add(new Option(Ba(a),a));je.value=o.at(-1)??"",Qe()}Aa.addEventListener("input",zt);function zt(){const e=Aa.value.trim().toUpperCase(),t=e.slice(0,2);e.length<15?Re.textContent="":Vt(e)&&We(t)?(Re.textContent=`Registered in ${Le(t)}.`,Re.dataset.tone="good"):(Re.textContent="This doesn't look like a GSTIN.",Re.dataset.tone="bad")}function kr(){const e={};for(const t of Ht)e[t]=L(t).value;return e}function Qe(){const e=new Map(La().map(({key:o,input:a})=>[o,a])),t=B.overview?.products??[],n=B.savedCatalogue?Oa(t,B.savedCatalogue).matched:new Map;st.replaceChildren(...t.map(o=>Dr(o.key,o.title,o.sku,o.orders.length,e.get(o.key)??n.get(o.key))));const s=t.length>0;Ar.hidden=s,Da.parentElement.hidden=!s,ka.disabled=!s}function Dr(e,t,n,s,o){const a=document.createElement("tr");a.dataset.key=e,a.dataset.sku=n,a.dataset.title=t;const i=document.createElement("th");i.scope="row";const l=document.createElement("span");l.className="product-title",l.textContent=t||"(no title)";const r=document.createElement("span");r.className="product-meta",r.textContent=[n&&`SKU ${n}`,et(s,"order")].filter(Boolean).join(" · "),i.append(l,r);const d=Yn("hsn",`HSN code for ${t}`,o?.hsn);d.input.inputMode="numeric",d.input.maxLength=8;const c=Yn("rate",`GST rate for ${t}`,o?.rate);c.input.inputMode="decimal",c.input.setAttribute("list","rates");const u=document.createElement("td"),h=document.createElement("select");return h.name="supply",h.setAttribute("aria-label",`If ${t} carries no GST`),h.add(new Option("It has GST","")),h.add(new Option("Nil-rated","nil-rated")),h.add(new Option("Exempt","exempt")),h.add(new Option("Non-GST","non-gst")),h.value=o?.supply??"",c.input.disabled=h.value!=="",h.addEventListener("change",()=>{c.input.disabled=h.value!=="",c.input.disabled&&(c.input.value="")}),u.append(h),a.append(i,d.cell,c.cell,u),a}function Yn(e,t,n=""){const s=document.createElement("td"),o=document.createElement("input");return o.name=e,o.value=n,o.setAttribute("aria-label",t),o.autocomplete="off",s.append(o),{cell:s,input:o}}function La(){return[...st.rows].map(e=>{const t=n=>e.querySelector(`[name="${n}"]`).value;return{key:e.dataset.key,input:{sku:e.dataset.sku,title:e.dataset.title,hsn:t("hsn"),rate:t("rate"),supply:t("supply")}}})}function Pa(){return[...La().map(e=>e.input),...B.otherProducts]}bt.addEventListener("change",async()=>{const e=bt.files?.[0];e&&(B.usingSample&&jt(),_a(await e.text(),e.name),bt.value="")});function _a(e,t){let n;try{n=Kn(e)}catch(i){const l=i instanceof Oe?i.problems.join("; "):i.message;we.textContent=`${t} could not be used: ${l}`,we.dataset.tone="bad";return}B.savedCatalogue=n,st.replaceChildren(),Qe();const s=B.overview?.products??[],{matched:o,others:a}=Oa(s,n);B.otherProducts=a,we.textContent=s.length?`${t}: filled ${o.size} of ${et(s.length,"product")}.`:`${t} loaded. It will fill in your products once you add the order export.`,we.dataset.tone="good"}ka.addEventListener("click",()=>{_e("gst-product-list.csv",Ia(Pa()),"text/csv")});zn.addEventListener("change",async()=>{B.refundsCsv=await zn.files?.[0]?.text()});jn.addEventListener("change",async()=>{B.buyersCsv=await jn.files?.[0]?.text()});document.addEventListener("click",e=>{const t=e.target.closest("[data-template]")?.dataset.template,n=t?Or[t]:void 0;n&&_e(n.name,n.csv,"text/csv")});Ze.addEventListener("submit",async e=>{if(e.preventDefault(),He([]),!B.ordersCsv){He(["Add your Shopify order export in step 1."]);return}qe.disabled=!0,qe.textContent="Working…";try{const t=je.value,n=Ze.elements.namedItem("prices").value,s=await Rr({ordersCsv:B.ordersCsv,pricesIncludeTax:n==="inclusive",period:t,seller:kr(),catalogue:Pa(),refundsCsv:B.refundsCsv,buyerGstinsCsv:B.buyersCsv});s.ok?Mr(s.pack,t):He(s.problems)}catch(t){console.error(t),He([`Something went wrong: ${t.message}. Please email me this message.`])}finally{qe.disabled=!1,qe.textContent="Make my GST pack"}});function He(e){if(Fe.hidden=e.length===0,e.length===0){Fe.replaceChildren();return}const t=document.createElement("p");t.textContent=e.length===1?"One thing to fix first:":`${e.length} things to fix first:`;const n=document.createElement("ul");n.append(...e.map(s=>Object.assign(document.createElement("li"),{textContent:s}))),Fe.replaceChildren(t,n),Fe.scrollIntoView({block:"center"})}function Mr(e,t){ie={pack:e,period:t},L("stat-invoices").textContent=String(e.issued.length),L("stat-notes").textContent=String(e.creditNotes.length),L("stat-review").textContent=String(e.review.length),L("stat-skipped").textContent=String(e.skipped.length);const n=e.files.has("gstr1/gstr1.json");L("download-gstr1").disabled=!n,L("gstr1-note").textContent=n?`The GSTR-1 file is for ${Ba(t)}.`:"Pick a month in step 1 to get the GSTR-1 upload file.",L("review").tBodies[0].replaceChildren(...e.review.map(i=>{const l=document.createElement("tr");for(const r of[i.orderName,Cr[i.kind],i.detail])l.append(Object.assign(document.createElement("td"),{textContent:r}));return l})),L("review-block").hidden=e.review.length===0;const o=[...e.files.keys()].filter(i=>/^(invoices|credit-notes)\//.test(i));L("invoice-pick").replaceChildren(...o.map(i=>new Option(i.replace(/^invoices\//,"Invoice ").replace(/^credit-notes\//,"Credit note ").replace(/\.html$/,""),i))),L("invoice-block").hidden=o.length===0,Ga(),L("summary").textContent=e.summary,Ye.hidden=!1,Ye.focus(),Ye.scrollIntoView({block:"start"})}L("invoice-pick").addEventListener("change",Ga);function Ga(){const e=L("invoice-pick").value;L("invoice-view").srcdoc=e&&ie?.pack.files.get(e)||""}L("download-zip").addEventListener("click",()=>{if(!ie)return;const e=`gst-pack-preview-${ie.period||"all"}`;_e(`${e}.zip`,Ir(ie.pack.files,e,new Date),"application/zip")});L("download-gstr1").addEventListener("click",()=>{const e=ie?.pack.files.get("gstr1/gstr1.json");e&&_e(`gstr1-${ie.period}.json`,e,"application/json")});L("download-tally").addEventListener("click",()=>{const e=ie?.pack.files.get("tally/sales-vouchers.xml");e&&_e("tally-sales-vouchers.xml",e,"application/xml")});L("sample").addEventListener("click",()=>{jt(),B.usingSample=!0;const e=es;for(const t of Ht)L(t).value=e[t]??"";zt(),Ma(Ua,"Sample export"),_a(Fa,"Sample product list"),B.refundsCsv=qa,B.buyersCsv=Ha,we.textContent+=" One product is left blank on purpose, to show what happens.",Ze.requestSubmit()});function jt(){if(B.usingSample){B.usingSample=!1;for(const e of Ht)L(e).value="";zt(),Object.assign(B,{ordersCsv:void 0,overview:void 0,savedCatalogue:void 0,otherProducts:[],refundsCsv:void 0,buyersCsv:void 0}),st.replaceChildren(),Qe();for(const e of[Ie,we])e.textContent="";Ye.hidden=!0,ie=void 0}}function _e(e,t,n){const s=URL.createObjectURL(new Blob([t],{type:n}));Object.assign(document.createElement("a"),{href:s,download:e}).click(),setTimeout(()=>URL.revokeObjectURL(s),1e4)}function et(e,t){return`${e} ${t}${e===1?"":"s"}`}function Ba(e){return new Date(`${e}-01T00:00:00`).toLocaleDateString("en-IN",{month:"long",year:"numeric"})}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  content: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: '50-to-500-orders-per-day-shopify-store',
    title: 'How a Shopify Store Scaled from 50 to 537 Orders/Day: Full Fulfillment Optimization Breakdown',
    description: 'Detailed case study: How optimizing Shenzhen warehouse workflows and switching to factory-direct sourcing reduced product cost by 41%, cut shipping time from 18 to 6 days, and slashed dispute rate from 7.8% to 0.6% over 14 months.',
    date: '2025-12-20',
    author: 'WegoFulfill Team',
    category: 'Case Studies',
    readTime: '10 min read',
    content: `
<h2>The Starting Point: A Shopify Store Hitting the Ceiling</h2>
<p>In March 2024, a US-based Shopify seller contacted us. They sold phone accessories &mdash; primarily silicone cases, tempered glass screen protectors, and braided charging cables &mdash; averaging 47 orders per day. Their monthly revenue was approximately $28,000, but net profit sat at just $5,100 (18.2% margin). Here's what was eating their margins:</p>

<table>
<tr><th>Pain Point</th><th>Metric (March 2024)</th><th>Impact</th></tr>
<tr><td>Product Cost</td><td>$3.80/case (AliExpress)</td><td>52% above factory price</td></tr>
<tr><td>Shipping Time (US)</td><td>15-22 days (AliExpress Standard)</td><td>4.2/5.0 avg. store rating</td></tr>
<tr><td>Defect/Dispute Rate</td><td>7.8% of orders</td><td>~$870/month in refunds</td></tr>
<tr><td>Manual Order Entry</td><td>~2.5 hours/day</td><td>47 orders/day was max capacity</td></tr>
<tr><td>No Branding</td><td>Generic packaging with Chinese labels</td><td>Zero repeat purchase rate</td></tr>
</table>

<h2>The Intervention: A 5-Point Fulfillment Overhaul</h2>

<h3>1. Factory-Direct Sourcing (Month 1-2)</h3>
<p>We deployed our Shenzhen sourcing team to find the factory origins of the top 3 SKUs. Using 1688 and direct factory connections, we identified two specialized factories: one for silicone cases (Dongguan-based, ISO 9001) and one for tempered glass (Shenzhen-based). We negotiated bulk pricing with a sliding scale:</p>
<ul>
<li><strong>Case unit cost dropped from $3.80 to $2.25:</strong> 41% reduction. At 47 orders/day averaging 1.3 cases per order, that's $3,388 saved per month.</li>
<li><strong>Glass protector cost: $1.20 to $0.68:</strong> 43% reduction.</li>
<li><strong>Braided cable: $2.90 to $1.65:</strong> 43% reduction.</li>
<li><strong>Blended COGS reduction:</strong> 42% across all SKUs.</li>
</ul>

<h3>2. Quality Control Implementation (Month 2-3)</h3>
<p>We introduced a 3-stage QC pipeline in our Longhua warehouse:</p>
<ul>
<li><strong>Stage 1 &mdash; Incoming Inspection:</strong> Random sampling of 20% of each batch at factory receipt. Checked color accuracy against Pantone references, material thickness with digital calipers, and visual defects under 5000K lighting.</li>
<li><strong>Stage 2 &mdash; Pre-Pack QC:</strong> 100% inspection during pick-and-pack. Each item visually scanned, glass protectors tested for edge clarity, cables tested with a USB continuity checker.</li>
<li><strong>Stage 3 &mdash; Final Audit:</strong> Random 5% audit of packed parcels before courier pickup. Weight verification, label accuracy check.</li>
</ul>
<p><strong>Result:</strong> Defect rate fell from 7.8% to 0.9% by month 4, then to 0.6% by month 8. Monthly refund costs dropped from $870 to $94. Store rating climbed from 4.2 to 4.7 stars.</p>

<h3>3. Shipping Optimization (Month 3-4)</h3>
<p>We switched from AliExpress Standard to a multi-carrier routing strategy:</p>
<ul>
<li><strong>US orders:</strong> YunExpress Special Line (5-8 days, $4.20 avg)</li>
<li><strong>UK orders:</strong> WanbExpress (4-6 days, $3.80 avg)</li>
<li><strong>EU orders:</strong> Yanwen + local last-mile (5-8 days, $4.50 avg)</li>
<li><strong>Express upgrades:</strong> DHL for orders > $50 AOV (3-5 days)</li>
</ul>
<p><strong>Key metric:</strong> Average delivery time dropped from 18 days to 6.8 days. Customer inquiries about "where is my order" fell by 73%.</p>

<h3>4. Automated Order Syncing (Month 4)</h3>
<p>We integrated the Shopify store directly with our fulfillment system via API. Orders auto-sync every 15 minutes. Tracking numbers auto-push back to Shopify. The seller went from spending 2.5 hours/day on manual order entry to 0 hours. This was the moment they could scale.</p>

<h3>5. Branded Packaging Rollout (Month 5-6)</h3>
<p>We designed and produced custom packaging: matte-finish boxes with the store logo, tissue paper with a branded pattern, thank-you cards with a 15% discount code, and QR code stickers linking to the store's Instagram. Cost: $0.32 per parcel at 200+ orders/day volume. Impact: repeat purchase rate jumped from near-zero to 12% within 3 months.</p>

<h2>The Results: 14-Month Before/After</h2>
<table>
<tr><th>Metric</th><th>March 2024 (Before)</th><th>May 2025 (After)</th><th>Change</th></tr>
<tr><td>Daily Orders</td><td>47</td><td>537</td><td>+1,043%</td></tr>
<tr><td>Monthly Revenue</td><td>$28,000</td><td>$312,000</td><td>+1,014%</td></tr>
<tr><td>Net Profit Margin</td><td>18.2%</td><td>37.4%</td><td>+19.2pp</td></tr>
<tr><td>Blended COGS</td><td>$3.80 avg</td><td>$2.10 avg</td><td>-44.7%</td></tr>
<tr><td>Shipping Time (US)</td><td>18 days</td><td>6.2 days</td><td>-65.6%</td></tr>
<tr><td>Defect Rate</td><td>7.8%</td><td>0.6%</td><td>-92.3%</td></tr>
<tr><td>Monthly Refund Cost</td><td>$870</td><td>$112</td><td>-87.1%</td></tr>
<tr><td>Store Rating</td><td>4.2</td><td>4.8</td><td>+0.6 stars</td></tr>
<tr><td>Repeat Purchase Rate</td><td>&lt;1%</td><td>12.4%</td><td>+12pp</td></tr>
<tr><td>Daily Fulfillment Labor</td><td>2.5 hrs (seller)</td><td>0 hrs</td><td>-100%</td></tr>
</table>

<h2>Key Insight: Why This Worked</h2>
<p>This wasn't just about switching suppliers. The compounding effect of five simultaneous optimizations created a flywheel: cheaper products &rarr; higher margins &rarr; more ad budget &rarr; more orders &rarr; better bulk pricing &rarr; even higher margins. The defect rate reduction alone saved enough money to fund the custom packaging. The automated syncing freed up the time needed to scale Facebook ads from $50/day to $800/day. The branded packaging turned one-time buyers into repeat customers, reducing the effective CAC by 18%.</p>
<p><strong>The single most impactful change?</strong> Factory-direct sourcing. The 41% COGS reduction on the top SKU alone added $3,388/month in pure profit at the original volume. At 537 orders/day, that same 41% reduction contributes approximately $38,000/month in incremental margin.</p>
`,
  },
  {
    slug: 'toothbrush-heads-dropshipping',
    title: 'Toothbrush Head Dropshipping: How a Niche Consumable Built a $78K/Month Recurring Revenue Machine',
    description: 'In-depth analysis: How selecting a consumable niche with 3-month repurchase cycles, combined with subscription app integration and 1688 factory sourcing, generated 32% monthly recurring orders and $78K MRR within 11 months.',
    date: '2025-11-25',
    author: 'WegoFulfill Team',
    category: 'Case Studies',
    readTime: '9 min read',
    content: `
<h2>The Strategic Insight: Consumables > Trend Products</h2>
<p>In April 2024, a solo entrepreneur with a $3,000 starting budget approached us with a specific thesis: trend-based dropshipping (fidget spinners, LED masks, etc.) has a short lifespan, but consumable products have built-in recurring demand. They chose electric toothbrush replacement heads for three data-backed reasons:</p>
<ul>
<li><strong>Dentist-recommended replacement cycle:</strong> 3 months. Every customer is a repeat buyer by design.</li>
<li><strong>Price arbitrage:</strong> Brand-name 4-packs (Oral-B, Philips) retail for $25-40 in US drugstores. 1688 factory price for equivalent quality: $1.15/pack.</li>
<li><strong>Shipping economics:</strong> A 4-pack weighs 52g. At YunExpress rates, shipping to the US costs $3.20. Total landed cost: $4.35. Retail price: $14.99. Gross margin: 71%.</li>
</ul>

<h2>Phase 1: Product Validation (Months 1-3)</h2>
<p>We sourced samples from 6 factories on 1688, testing 4 bristle types: standard nylon, charcoal-infused, tapered slim-tip, and spiral deep-clean. Each sample was evaluated on 5 criteria by our QC team:</p>
<table>
<tr><th>QC Criterion</th><th>Testing Method</th><th>Weight</th></tr>
<tr><td>Bristle Retention</td><td>50-cycle pull test (ISO 20126)</td><td>30%</td></tr>
<tr><td>Color Consistency</td><td>Pantone matching under D65 light</td><td>15%</td></tr>
<tr><td>Packaging Seal Integrity</td><td>Vacuum seal test, 24h observation</td><td>20%</td></tr>
<tr><td>Dimensional Tolerance</td><td>&#177;0.2mm on attachment ring</td><td>25%</td></tr>
<tr><td>Material Odor</td><td>3-person blind sniff test</td><td>10%</td></tr>
</table>
<p>After evaluating 24 sample batches, we selected Factory #4 (ISO 13485 certified, Dongguan) producing charcoal-infused heads at $1.15/4-pack. The seller launched with one SKU (8-pack bundle, compatible with Oral-B) at $18.99.</p>

<h2>Phase 2: The Subscription Pivot (Months 4-6)</h2>
<p>The critical move was integrating a Shopify subscription app (Recharge) in month 4. We configured a "Subscribe & Save 15%" offer: customers who subscribed to auto-delivery every 3 months got $16.14 instead of $18.99. The fulfillment implications:</p>
<ul>
<li><strong>Predictable inventory:</strong> Subscription forecasts let us pre-position 2 weeks of buffer stock in Shenzhen. Stockout rate: 0%.</li>
<li><strong>Batch processing:</strong> Subscription orders were batched every Monday morning. 200+ orders picked, packed, and labeled in 3 hours.</li>
<li><strong>Custom packaging for subscribers:</strong> We designed a "refill pouch" format (lighter, cheaper shipping) vs the retail box for first-time buyers.</li>
</ul>

<h2>Phase 3: Scaling and Optimization (Months 7-11)</h2>
<p>As volume grew from 15 orders/day to 120+/day, we implemented continuous improvements:</p>
<ul>
<li><strong>Month 7:</strong> Negotiated price break at 50,000+ units/month. Unit cost: $1.15 &rarr; $0.82 (-28.7%).</li>
<li><strong>Month 8:</strong> Added Oral-B + Philips Sonicare compatibility variants. SKU count: 1 &rarr; 4. Average order value: $18.99 &rarr; $23.50 (customers often added a second variant).</li>
<li><strong>Month 9:</strong> Switched US shipping from YunExpress to a YunExpress+USPS last-mile hybrid. Delivery time: 7.2 days &rarr; 5.8 days. Cost unchanged.</li>
<li><strong>Month 10:</strong> Added "family pack" bundle (3 x 8-packs = 24 heads). Price: $39.99. COGS: $2.46 + $4.80 shipping = $7.26. Margin: 81.8%. 15% of new customers chose this option.</li>
<li><strong>Month 11:</strong> Reached 81 subscription-based stores via the Shopify app marketplace by offering our fulfillment API as a private app integration.</li>
</ul>

<h2>The Numbers: 11-Month Trajectory</h2>
<table>
<tr><th>Metric</th><th>Month 1</th><th>Month 6</th><th>Month 11</th></tr>
<tr><td>Monthly Orders</td><td>89</td><td>1,847</td><td>4,112</td></tr>
<tr><td>Subscription Orders (%)</td><td>0%</td><td>18%</td><td>32%</td></tr>
<tr><td>Monthly Revenue</td><td>$1,690</td><td>$35,093</td><td>$78,128</td></tr>
<tr><td>AOV</td><td>$18.99</td><td>$19.00</td><td>$23.50</td></tr>
<tr><td>COGS per Order</td><td>$4.35</td><td>$3.92</td><td>$3.38</td></tr>
<tr><td>Gross Margin</td><td>77.1%</td><td>79.4%</td><td>85.6%</td></tr>
<tr><td>Customer LTV (3-month)</td><td>$18.99</td><td>$24.70</td><td>$37.80</td></tr>
<tr><td>Refund/Dispute Rate</td><td>0.3%</td><td>0.2%</td><td>0.15%</td></tr>
</table>

<h2>The Math That Makes This Work</h2>
<p>At 4,112 monthly orders with a 32% subscription rate, that's 1,316 subscribers paying $16.14 every 3 months. Annualized subscription revenue: 1,316 x $16.14 x 4 cycles = $85,008/year in contracted recurring revenue. Combined with the remaining 2,796 one-time orders at $23.50 AOV = $65,706/month. Total projected annualized run rate at month 11: approximately $940,000.</p>
<p><strong>The critical unlock was the subscription model.</strong> Without subscriptions, the seller would need to re-acquire every customer every 3 months. With subscriptions, 32% of revenue is contracted and predictable. This predictability allowed the seller to confidently scale Facebook ad spend from $15/day to $350/day, knowing that each acquired customer had a 32% chance of becoming a recurring revenue stream.</p>
`,
  },
  {
    slug: 'phone-accessories-fulfillment',
    title: 'Phone Accessories Brand: How Supply Chain Excellence Built a 7-Figure Business with 0.8% Dispute Rate',
    description: 'Technical deep-dive: How a phone accessories brand used a 3-stage QC pipeline, custom packaging with magnetic closure boxes, and multi-carrier routing to build a 7-figure brand with premium pricing ($24.99 vs $12.99 industry average) and an industry-leading 0.8% dispute rate.',
    date: '2025-11-01',
    author: 'WegoFulfill Team',
    category: 'Case Studies',
    readTime: '11 min read',
    content: `
<h2>Breaking Out of the Commodity Trap</h2>
<p>Phone cases are the textbook commodity product in dropshipping: thousands of sellers, near-identical products, and a race to the bottom on price. In February 2024, a seller came to us with a Shopify store doing $11,000/month selling generic phone cases at $9.99 with a 14% net margin. Their store rating was 3.9 stars, and they were bleeding $700/month in refunds from a 5.8% dispute rate. The standard playbook wasn't working. We decided to try the opposite of what every phone case dropshipper does.</p>

<h2>The Strategy: Premium Positioning Through Supply Chain</h2>
<p>Instead of chasing the lowest price, we hypothesized that customers would pay 2-3x more for a phone case if the product quality, packaging, and delivery experience justified it. The plan was simple but ambitious: transform a $2 factory case into a $25 brand experience through systematic supply chain engineering.</p>

<h3>1. Factory Selection and Product Engineering (Month 1-2)</h3>
<p>We audited 8 factories across Shenzhen and Dongguan against a 12-point scorecard:</p>
<table>
<tr><th>Evaluation Criteria</th><th>Minimum Standard</th><th>Selected Factory Score</th></tr>
<tr><td>ISO Certification</td><td>ISO 9001 required</td><td>ISO 9001 + ISO 14001</td></tr>
<tr><td>Minimum Order Capability</td><td>500 units/SKU</td><td>200 units/SKU (no MOQ)</td></tr>
<tr><td>Print Quality</td><td>UV print, minimum 300 DPI</td><td>UV print, 600 DPI industrial</td></tr>
<tr><td>Material Options</td><td>TPU + PC hybrid</td><td>TPU + PC + liquid silicone + aramid fiber</td></tr>
<tr><td>Color Accuracy</td><td>&#916;E &lt; 3.0</td><td>&#916;E &lt; 1.5 (ISO 12647)</td></tr>
<tr><td>Drop Test Rating</td><td>MIL-STD 1.2m</td><td>MIL-STD 2.0m certified</td></tr>
<tr><td>Lead Time</td><td>&lt; 7 days</td><td>3-5 days for reorders</td></tr>
<tr><td>Export Experience</td><td>EU/US experience</td><td>10+ years, 30+ countries</td></tr>
</table>
<p>We selected Factory #6 (Bao'an District, Shenzhen). The key differentiator was their 600 DPI UV printer, which produced case graphics indistinguishable from injection-molded designs &mdash; eliminating the "printed sticker" look that plagues budget cases.</p>

<h3>2. The 3-Stage QC Pipeline (Month 2-4, Ongoing)</h3>
<p>We designed a quality control system with specific, measurable pass/fail thresholds for each stage:</p>

<p><strong>Stage 1 &mdash; Material Receiving Inspection (Warehouse Bay 3):</strong></p>
<ul>
<li>All incoming batches: 10% random sample for spectrometer color check (&#916;E &lt; 1.5 tolerance).</li>
<li>TPU hardness tested with Shore A durometer (target: 85A &#177;3).</li>
<li>Print adhesion tested with 3M 610 tape test (ASTM D3359, rating &ge; 4B required).</li>
<li><strong>Reject threshold:</strong> Batch rejected if >2% of sample fails any test.</li>
</ul>

<p><strong>Stage 2 &mdash; Pre-Pack 100% Inspection (Packing Line A):</strong></p>
<ul>
<li>Every single case inspected under 5000K LED panel (simulates daylight).</li>
<li>3-second visual scan per side: scratches, print alignment, dust under coating.</li>
<li>Button cutout alignment: digital gauge check, &#177;0.3mm tolerance.</li>
<li>Camera lens cutout: precision ring gauge fit test.</li>
<li><strong>Defect catch rate at this stage:</strong> ~1.2% of units flagged, returned to factory for credit.</li>
</ul>

<p><strong>Stage 3 &mdash; Final Audit (Shipping Bay):</strong></p>
<ul>
<li>Random 8% audit of packed parcels before courier handoff.</li>
<li>Weight check: acceptable range &#177;3g of expected parcel weight.</li>
<li>Label scan: barcode readability verified with scanner gun.</li>
<li><strong>Result:</strong> Final defect rate at customer delivery: 0.8%.</li>
</ul>

<h3>3. Custom Packaging That Justifies the Price (Month 3-4)</h3>
<p>The packaging was designed to create a premium unboxing experience:</p>
<ul>
<li><strong>Magnetic closure rigid box:</strong> 1200gsm greyboard + 157gsm art paper wrap, matte lamination. Unit cost: $0.42 at 1,000+ units.</li>
<li><strong>Custom-cut foam insert:</strong> Holds the case in a floating display position. Unit cost: $0.18.</li>
<li><strong>Branded tissue paper:</strong> 17gsm, custom pattern print. Unit cost: $0.06 per sheet.</li>
<li><strong>Thank-you card:</strong> 350gsm, double-sided, with unique QR code for a 10% discount on next purchase. Unit cost: $0.08.</li>
<li><strong>Total packaging cost:</strong> $0.74 per unit. Added to the $2.25 case COGS = $2.99 total. Retail price: $24.99. Packaging represents just 3% of the retail price but transformed perceived value.</li>
</ul>

<h3>4. Multi-Carrier Shipping Matrix (Month 4, Ongoing)</h3>
<p>We implemented a decision-tree routing system based on destination, order value, and customer-selected speed:</p>
<table>
<tr><th>Destination</th><th>Order Value</th><th>Carrier</th><th>Delivery Time</th><th>Cost</th></tr>
<tr><td>US</td><td>&lt; $30</td><td>YunExpress</td><td>5-8 days</td><td>$3.80</td></tr>
<tr><td>US</td><td>&ge; $30</td><td>YunExpress+USPS</td><td>5-7 days</td><td>$4.20</td></tr>
<tr><td>US Express</td><td>Any</td><td>DHL Express</td><td>3-4 days</td><td>$8.50</td></tr>
<tr><td>UK</td><td>Any</td><td>WanbExpress</td><td>4-6 days</td><td>$3.60</td></tr>
<tr><td>EU (DE/FR)</td><td>Any</td><td>Yanwen+local</td><td>5-8 days</td><td>$4.10</td></tr>
<tr><td>AU/CA</td><td>Any</td><td>YunExpress</td><td>6-9 days</td><td>$4.50</td></tr>
</table>

<h2>The Results: 16-Month Before/After</h2>
<table>
<tr><th>Metric</th><th>Feb 2024 (Before)</th><th>Jun 2025 (After)</th><th>Change</th></tr>
<tr><td>Monthly Revenue</td><td>$11,000</td><td>$147,000</td><td>+1,236%</td></tr>
<tr><td>Avg. Retail Price</td><td>$9.99</td><td>$24.99</td><td>+150%</td></tr>
<tr><td>Monthly Orders</td><td>~1,100</td><td>~5,880</td><td>+435%</td></tr>
<tr><td>COGS per Unit</td><td>$2.80</td><td>$2.99 (+ $0.74 packaging)</td><td>+6.8%</td></tr>
<tr><td>Gross Margin per Unit</td><td>$7.19 (72%)</td><td>$22.00 (88%)</td><td>+16pp</td></tr>
<tr><td>Net Profit Margin</td><td>14%</td><td>42%</td><td>+28pp</td></tr>
<tr><td>Dispute/Refund Rate</td><td>5.8%</td><td>0.8%</td><td>-86.2%</td></tr>
<tr><td>Monthly Refund Cost</td><td>$638</td><td>$118</td><td>-81.5%</td></tr>
<tr><td>Store Rating</td><td>3.9</td><td>4.9</td><td>+1.0 stars</td></tr>
<tr><td>Instagram Followers</td><td>1,200</td><td>94,000</td><td>+7,733%</td></tr>
<tr><td>Repeat Purchase Rate</td><td>3%</td><td>19%</td><td>+16pp</td></tr>
</table>

<h2>The Counter-Intuitive Insight</h2>
<p>Conventional dropshipping wisdom says: find the cheapest product, sell it at the lowest viable price, and make it up on volume. This case study proves the opposite can be far more profitable. By <strong>increasing</strong> COGS by $0.19 per unit (the premium packaging), we were able to increase the retail price by $15.00 &mdash; an incremental margin uplift of approximately $14.81 per unit.</p>
<p>At 5,880 orders/month, that packaging investment of $0.19/unit ($1,117/month) generates an incremental $87,083 in monthly gross profit compared to the $9.99 price point. That's a 78x return on the packaging investment.</p>
<p><strong>The dispute rate reduction is equally instructive.</strong> The 3-stage QC pipeline costs approximately $0.08 per unit in labor and equipment amortization. It reduced refund costs from $638/month to $118/month &mdash; a direct saving of $520/month. But the indirect effect is far larger: a 4.9-star rating and premium unboxing experience drove organic Instagram content that became the primary customer acquisition channel, reducing the brand's Facebook ad dependency by 40% over 12 months.</p>
`,
  },
];

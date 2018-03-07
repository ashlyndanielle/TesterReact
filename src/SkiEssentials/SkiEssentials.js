import React from 'react';
import styled from 'styled-components';

import './SkiEssentials.css';

const SkiEssentials = () => {
  const linear = "659dbd"
  return (
    <div class="main-container">
      <table>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Rent</th>
            <th scope="col">Side Notes for Mom</th>
            <th scope="col">Side Notes for Brandon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Skis</td>
            <td>Yes</td>
            <td colspan="2">We'll rent these together on Saturday.  There is a ski-n-see down the street from my house.</td>
          </tr>
          <tr>
            <td>Boots</td>
            <td>Yes</td>
            <td colspan="2">We'll rent these together on Saturday.  There is a ski-n-see down the street from my house.</td>
          </tr>
          <tr>
            <td>Ski Socks</td>
            <td>No</td>
            <td colspan="2">Between Gus and I, we have plenty of socks in different sizes.  We'll just want to make sure you are wearing the pair you plan to use when we rent the boots.</td>
          </tr>
          <tr>
            <td>Snow Pants</td>
            <td>Probably not</td>
            <td colspan="2">This one is a judgement call.  It's supposed to be nice out so you probably won't need snow pants, however, if it gets windy it's nice to have that windproof functionality of snow pants.  Also, if we take a break and want to sit for a bit you won't have to worry about finding something dry or an unused layer to sit on.</td>
          </tr>
          <tr>
            <td rowspan="2">Winter Coat</td>
            <td rowspan="2">No</td>
            <td colspan="2">You don't necessarily need a coat to do cross country.  From what I've read, you just need to layer up and plan on shedding layers as you get moving.  If you are more comfortable having one the you probably don't need something super thick as it will most likely be packed away most of the time.</td>
          </tr>
          <tr>
            <td>I have three coats you can pick from if you don't have something at home.  One of them is super thick, one is about mid-grade and the other is just a shell with a broken zipper.</td>
            <td>Gus has an extra coat but it is a little big on him.  That shouldn't be a problem if you're just wearing it while we're resting but if you'd prefer something that fits, you could probably ask a friend.  My shell with the broken zipper is a mens coat and it would fit you if you want to use that.</td>
          </tr>
          <tr>
            <td rowspan="2">Helmet</td>
            <td rowspan="2">Depends</td>
            <td colspan="2">I won't make you guys wear helmets.  I was going to but looking into it, no one wears them.  However, I left some notes for you in case you do want to wear them.</td>
          </tr>
          <tr>
            <td>Gus's mom left her helmet and it is adjustable so you shouldn't have a problem.  I also have extra hats if you want to go that route.</td>
            <td>I'm pretty sure that Gus's dad left his helmet as well but I don't know if it's adjustable so it may not fit.  I do have at least one mens hat if you decide to go that route.</td>
          </tr>
          <tr>
            <td>Gloves</td>
            <td>No</td>
            <td colspan="2">Let me know if you don't have gloves.  I am pretty sure that I have an extra pair at my house but I can snag a pair from dad's if needed.  I'm heading up there for dinner today.  If you some of those cheapo ( or not cheapo ) liners then bring those, it's good to have them in case your hands get warm but not warm enough to have nothing on them.</td>
          </tr>
          <tr>
            <td>Goggles/Sunglasses</td>
            <td>No</td>
            <td colspan="2">From what I read, it's better to just use sunglasses than goggles.  Goggles make your face sweat and then they fog up.  So if you have some polarized sunglasses that is best.  I have super crappy scratched up glasses so I'm probably just going to go buy some or use my goggles anyway.</td>
          </tr>
          <tr>
            <td>Clothing</td>
            <td>No</td>
            <td colspan="2">The best thing to do for cross country skiing ( from the articles I read ) is to wear thin layers.  DO layer up so you can shed things as you warm up and put them back on while you rest, but don't worry about bringing anything super thick.  If you want a better idea just google "cross country skiing attire".</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SkiEssentials;

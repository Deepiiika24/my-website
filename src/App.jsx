import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Flower from './Pages/Flower'
import Rice from './Pages/Rice'
import Spices from './Pages/Spices'
import Poojaproduct from './Pages/Poojaproduct'
import ContactForm from './Pages/ContactForm'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Socialicon from './Components/Socialicon'
import Leaves from './Pages/Leaves'
import Snacks from './Pages/Snacks'
import Beeda from './Pages/Beeda'
import Certificate from './Pages/Certificate'
import Vegetables from './Pages/Vegetables'

import Whitecarnation from './Flowers/Whitecarnation'
import Softpinkcarnation from './Flowers/Softpinkcarnation'
import Redcarnation from './Flowers/Redcarnation'
import Peachcarnation from './Flowers/Peachcarnation'
import Orangecarnation from './Flowers/Orangecarnation'
import Yellowcarnation from './Flowers/Yellowcarnation'
import Softpurplecarnation from './Flowers/Softpurplecarnation'
import Bacarratcarnation from './Flowers/Bacarratcarnation'
import Purplecarnation from './Flowers/Purplecarnation'
import Pinkcarnation from './Flowers/Pinkcarnation'
import Tuberose from './Flowers/Tuberose'
import Yellowmarigold from './Flowers/Yellowmarigold'
import Orangemarigold from './Flowers/Orangemarigold'
import Assortedpoojaflower from './Flowers/Assortedpoojaflower'
import Redrose from './Flowers/Redrose'
import Orangerose from './Flowers/Orangerose'
import Yellowrose from './Flowers/Yellowrose'
import Carnationgarland from './Flowers/Carnationgarland'
import Rosegarland from './Flowers/Rosegarland'
import Weddinggarland from './Flowers/Weddinggarland'
import Tuberosegarland from './Flowers/Tuberosegarland'
import Redrosepetal from './Flowers/Redrosepetal'
import Yellowrosepetal from './Flowers/Yellowrosepetal'
import Orangerosepetal from './Flowers/Orangerosepetal'
import Mixedrosepetal from './Flowers/Mixedrosepetal'
import Jasminestring from './Flowers/Jasminestring'
import Carnationstring from './Flowers/Carnationstring'
import Marigoldstring from './Flowers/Marigoldstring'
import Babybreathstring from './Flowers/Babybreathstring'

import Bananaleaf from './Leaves/Bananaleaf'
import Neemleaves from './Leaves/Neemleaves'
import Ashokaleaves from './Leaves/Ashokaleaves'
import Mangoleaves from './Leaves/Mangoleaves'
import Teakleaves from './Leaves/Teakleaves'
import Betelleaves from './Leaves/Betelleaves'
import Eucalyptus from './Leaves/Eucalyptus'
import Palmleaves from './Leaves/Palmleaves'
import Tulsileaves from './Leaves/Tulsileaves'
import Bambooleaves from './Leaves/Bambooleaves'
import Guavaleaves from './Leaves/Guavaleaves'
import Figleaves from './Leaves/Figleaves'
import Moringaleaves from './Leaves/Moringaleaves'
import Toren from './Leaves/Toren'

import Garlic from './spices/Garlic'
import Mace from './spices/Mace'
import Turmeric from './spices/Turmeric'
import Poppyseed from './spices/Poppyseed'
import Peppercorns from './spices/Peppercorns'
import Nutmeg from './spices/Nutmeg'
import Mustardseeds from './spices/Mustardseeds'
import Greencardamom from './spices/Greencardamom'
import Cumin from './spices/Cumin'
import Coriander from './spices/Coriander'
import Clove from './spices/Clove'
import Cinnamon from './spices/Cinnamon'
import Caromseeds from './spices/Caromseeds'
import Browncardamam from './spices/Browncardamam'
import Blackpepper from './spices/Blackpepper'
import Bayleaf from './spices/Bayleaf'
import Redchilli from './spices/Redchilli'
import Ginger from './spices/Ginger'
import Spistaranice from './spices/Spistaranise'
import Spicessaffron from './spices/Spicessaffron'

import Brinjal from './vegetables/Brinjal'
import Cabbage from './vegetables/Cabbage'
import Cauliflower from './vegetables/Cauliflower'
import Drumstick from './vegetables/Drumstick'
import Greenchilli from './vegetables/Greenchilli'
import Ladyfinger from './vegetables/Ladyfinger'
import Mushroom from './vegetables/Mushroom'
import Onion from './vegetables/Onion'
import Potato from './vegetables/Potato'
import Spinach from './vegetables/Spinach'
import Vegbottle from './vegetables/Vegbottle'
import Vegetablebroccolie from './vegetables/Vegetablebroccolie'

import Basmatirice from './rice/Basmatirice'
import Boiledrice from './rice/Boiledrice'
import Idlirice from './rice/Idlirice'
import Rawrice from './rice/Rawrice'
import Seeraghasamba from './rice/Seeraghasamba'
import Redrice from './rice/Redrice'
import Mattarice from './rice/Mattarice'

import Footer from './Components/Footer'

import Blacksesameballs from './snacks/Blacksesameballs'
import Bananachips from './snacks/Bananachips'
import Garlicmixture from './snacks/Garlicmixture'
import Kadalaiparupu from './snacks/Kadalaiparupu'
import Hotmixture from './snacks/Hotmixture'
import Kamarcut from './snacks/Kamarcut'
import Peanutchikkies from './snacks/Peanutchikkies'
import Peanutchilli from './snacks/Peanutchilli'
import Peanutpepper from './snacks/Peanutpepper'
import Peanutsalt from './snacks/Peanutsalt'
import Tapiocachips from './snacks/Tapiocachips'
import Tapiocastick from './snacks/Tapiocastick'
import Thattaivadai from './snacks/Thattaivadai'
import Whitesesameballs from './snacks/Whitesesameballs'
import Chikpeas from './snacks/Chikpeas'
import Peanutchikkipowder from './snacks/Peanutchikkipowder'

import Sudharshana from './poojaproduct/Sudharshana' 
import Varalakmi from './poojaproduct/Varalakmi'
import Shivapooja from './poojaproduct/Shivapooja'
import Sathyanarayanapooja from './poojaproduct/Sathyanarayanapooja'
import Haridharshanapooja from './poojaproduct/Haridharshanapooja'
import Navgrahapooja from './poojaproduct/Navgrahapooja'
import Ganapathipooja from './poojaproduct/Ganapathipooja'
import Omthiraviyam from './poojaproduct/Omthiraviyam'
import Durgapooja from './poojaproduct/Durgapooja'
import Kalash from './poojaproduct/Kalash'
import Bell from './poojaproduct/Bell'
import Kumkumplate from './poojaproduct/Kumkumplate'
import Agarpathiolder from './poojaproduct/Agarpathiolder'
import Thalika from './poojaproduct/Thalika'
import Lota from './poojaproduct/Lota'
import Kungumam from './poojaproduct/Kungumam'
import Kottaipakku from './poojaproduct/Kottaipakku'
import Cowdungcake from './poojaproduct/Cowdungcake'
import Sival from './poojaproduct/Sival'
import Kopparathengai from './poojaproduct/Kopparathengai'
import Vettiver from './poojaproduct/Vettiver'
import Viputhi from './poojaproduct/Viputhi'
import Omkit from './poojaproduct/Omkit'
import Panner from './poojaproduct/Panner'
import Sambrani from './poojaproduct/Sambrani'
import Santhanam from './poojaproduct/Santhanam'
import Santhanakatti from './poojaproduct/Santhanakatti'
import Panchinool from './poojaproduct/Panchinool'
import Sambranicup from './poojaproduct/Sambranicup'
import Kalasanool from './poojaproduct/Kalasanool'
import Karpuram from './poojaproduct/Karpuram'
import Kattimanjal from './poojaproduct/Kattimanjal'
import Namakatti from './poojaproduct/Namakatti'
import Kashthurimanjal from './poojaproduct/Kashthurimanjal'
import Navathaniyam from './poojaproduct/Navathaniyam'
import Nel from './poojaproduct/Nel'
import Mangostick from './poojaproduct/Mangostick'
import Nelpoori from './poojaproduct/Nelpoori'
import Arasankattai from './poojaproduct/Arasankattai'
import Grass from './poojaproduct/Grass'

import Cardamomseeds from './Beeda/Cardamomseeds'
import Dryclove from './Beeda/Dryclove'
import Sweetpanchutni from './Beeda/Sweetpanchutni'
import Sweetjeeramittai from './Beeda/Sweetjeeramittai'
import Shreddedcoconut from './Beeda/Shreddedcoconut'
import Rosegulkand from './Beeda/Rosegulkand'
import Kanpuribiscuit from './Beeda/Kanpuribiscuit'
import Drytuttifrutti from './Beeda/Drytuttifrutti'
import Scroll from './Components/Scroll'
import Pickle from './Pages/Pickle'
import Oil from './Pages/Oil'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Scroll/>
        <Header />
        <Socialicon />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/aboutus' element={<Aboutus />}></Route>

          <Route path='/Flower' element={<Flower />}></Route>
          <Route path='/White-carnation' element={<Whitecarnation />}></Route>
          <Route path='/Soft-pink-carnation' element={<Softpinkcarnation />}></Route>
          <Route path='/Red-carnation' element={<Redcarnation />}></Route>
          <Route path='/Peach-carnation' element={<Peachcarnation />}></Route>
          <Route path='/Orange-carnation' element={<Orangecarnation />}></Route>
          <Route path='/Yellow-carnation' element={<Yellowcarnation />}></Route>
          <Route path='/Soft-purple-carnation' element={<Softpurplecarnation />}></Route>
          <Route path='/Bacarrat-carnation' element={<Bacarratcarnation />}></Route>
          <Route path='/Purple-carnation' element={<Purplecarnation />}></Route>
          <Route path='/Pink-carnation' element={<Pinkcarnation />}></Route>
          <Route path='/Tube-rose' element={<Tuberose />}></Route>
          <Route path='/Yellow-mari-gold' element={<Yellowmarigold />}></Route>
          <Route path='/Orange-mari-gold' element={<Orangemarigold />}></Route>
          <Route path='/Assorted-pooja-flower' element={<Assortedpoojaflower />}></Route>
          <Route path='/Red-rose' element={<Redrose />}></Route>
          <Route path='/Orange-rose' element={<Orangerose />}></Route>
          <Route path='/Yellow-rose' element={<Yellowrose />}></Route>
          <Route path='/Carnation-Garland' element={<Carnationgarland />}></Route>
          <Route path='/Rose-Garland' element={<Rosegarland />}></Route>
          <Route path='/Wedding-Garland' element={<Weddinggarland />}></Route>
          <Route path='/Tuberose-Garland' element={<Tuberosegarland />}></Route>
          <Route path='/Red-rose-petals' element={<Redrosepetal />}></Route>
          <Route path='/Yellow-rose-petals' element={<Yellowrosepetal />}></Route>
          <Route path='/Orange-rose-petals' element={<Orangerosepetal />}></Route>
          <Route path='/Mixed-rose-petal' element={<Mixedrosepetal />}></Route>
          <Route path='/Jasmine-string' element={<Jasminestring />}></Route>
          <Route path='/Carnation-string' element={<Carnationstring />}></Route>
          <Route path='/Marigold-string' element={<Marigoldstring />}></Route>
          <Route path='/Baby-breath-string' element={<Babybreathstring />}></Route>

          <Route path='/Rice' element={<Rice />}></Route>
          <Route path='/Basmati-rice' element={<Basmatirice />}></Route>
          <Route path='/White-raw-rice' element={<Rawrice />}></Route>
          <Route path='/Boiled-rice' element={<Boiledrice />}></Route>
          <Route path='/Idli-rice' element={<Idlirice />}></Route>
          <Route path='/Seeraga-samba-rice' element={<Seeraghasamba />}></Route>
          <Route path='/Matta-rice' element={<Mattarice />}></Route>
          <Route path='/Red-raw-rice' element={<Redrice />}></Route>

          <Route path='/Spices' element={<Spices />}></Route>
          <Route path='/Mace' element={<Mace />}></Route>
          <Route path='/Turmeric' element={<Turmeric />}></Route>
          <Route path='/Spistaranice' element={<Spistaranice />}></Route>
          <Route path='/Poppyseed' element={<Poppyseed />}></Route>
          <Route path='/Peppercorns' element={<Peppercorns />}></Route>
          <Route path='/Nutmeg' element={<Nutmeg />}></Route>
          <Route path='/Mustardseeds' element={<Mustardseeds />}></Route>
          <Route path='/Redchilli' element={<Redchilli />}></Route>
          <Route path='/Greencardamom' element={<Greencardamom />}></Route>
          <Route path='/Cumin' element={<Cumin />}></Route>
          <Route path='/Coriander' element={<Coriander />}></Route>
          <Route path='/Clove' element={<Clove />}></Route>
          <Route path='/Cinnamon' element={<Cinnamon />}></Route>
          <Route path='/Caromseeds' element={<Caromseeds />}></Route>
          <Route path='/Browncardamam' element={<Browncardamam />}></Route>
          <Route path='/Blackpepper' element={<Blackpepper />}></Route>
          <Route path='/Spicessaffron' element={<Spicessaffron />}></Route>
          <Route path='/Bayleaf' element={<Bayleaf />}></Route>
          <Route path='/Garlic' element={<Garlic />}></Route>
          <Route path='/Ginger' element={<Ginger />}></Route>

          <Route path='/Poojaproduct' element={<Poojaproduct/>}></Route>
          <Route path='/Sudharshana' element={<Sudharshana />}></Route>
          <Route path='/Varalakmi' element={<Varalakmi />}></Route>
          <Route path='/Shivapooja' element={<Shivapooja />}></Route>
          <Route path='/Sathyanarayanapooja' element={<Sathyanarayanapooja />}></Route>
          <Route path='/Haridharshanapooja' element={<Haridharshanapooja />}></Route>
          <Route path='/Navgrahapooja' element={<Navgrahapooja />}></Route>
          <Route path='/Ganapathipooja' element={<Ganapathipooja />}></Route>
          <Route path='/Omthiraviyam' element={<Omthiraviyam />}></Route>
          <Route path='/Durgapooja' element={<Durgapooja />}></Route>
          <Route path='/Kalash' element={<Kalash />}></Route>
          <Route path='/Bell' element={<Bell />}></Route>
          <Route path='/Kumkumplate' element={<Kumkumplate />}></Route>
          <Route path='/Agarpathiolder' element={<Agarpathiolder />}></Route>
          <Route path='/Thalika' element={<Thalika />}></Route>
          <Route path='/Lota' element={<Lota />}></Route>
          <Route path='/Kungumam' element={<Kungumam />}></Route>
          <Route path='/Kottaipakku' element={<Kottaipakku />}></Route>
          <Route path='/Cowdungcake' element={<Cowdungcake />}></Route>
          <Route path='/Sival' element={<Sival />}></Route>
          <Route path='/Kopparathengai' element={<Kopparathengai />}></Route>
          <Route path='/Vettiver' element={<Vettiver />}></Route>
          <Route path='/Viputhi' element={<Viputhi />}></Route>
          <Route path='/Omkit' element={<Omkit />}></Route>
          <Route path='/Panner' element={<Panner />}></Route>
          <Route path='/Sambrani' element={<Sambrani />}></Route>
          <Route path='/Santhanam' element={<Santhanam />}></Route>
          <Route path='/Santhanakatti' element={<Santhanakatti />}></Route>
          <Route path='/Panchinool' element={<Panchinool />}></Route>
          <Route path='/Sambranicup' element={<Sambranicup />}></Route>
          <Route path='/Kalasanool' element={<Kalasanool />}></Route>
          <Route path='/Karpuram' element={<Karpuram />}></Route>
          <Route path='/Kattimanjal' element={<Kattimanjal />}></Route>
          <Route path='/Namakatti' element={<Namakatti />}></Route>
          <Route path='/Kashthurimanjal' element={<Kashthurimanjal />}></Route>
          <Route path='/Navathaniyam' element={<Navathaniyam />}></Route>
          <Route path='/Nel' element={<Nel />}></Route>
          <Route path='/Mangostick' element={<Mangostick />}></Route>
          <Route path='/Nelpoori' element={<Nelpoori />}></Route>
          <Route path='/Arasankattai' element={<Arasankattai />}></Route>
          <Route path='/Grass' element={<Grass />}></Route>

          <Route path='/leaves' element={<Leaves />}></Route>
          <Route path='/Banana-leaves' element={<Bananaleaf />}></Route>
          <Route path='/Neem-leaves' element={<Neemleaves />}></Route>
          <Route path='/Ashoka-leaves' element={<Ashokaleaves />}></Route>
          <Route path='/Mango-leaves' element={<Mangoleaves />}></Route>
          <Route path='/Teak-leaves' element={<Teakleaves />}></Route>
          <Route path='/Betel-leaves' element={<Betelleaves />}></Route>
          <Route path='/Eucalyptus-leaves' element={<Eucalyptus />}></Route>
          <Route path='/Palm-leaves' element={<Palmleaves />}></Route>
          <Route path='/Tulsi-leaves' element={<Tulsileaves />}></Route>
          <Route path='/Bamboo-leaves' element={<Bambooleaves />}></Route>
          <Route path='/Guava-leaves' element={<Guavaleaves />}></Route>
          <Route path='/Fig-leaves' element={<Figleaves />}></Route>
          <Route path='/Moringa-leaves' element={<Moringaleaves />}></Route>
          <Route path='/Toren-leaves' element={<Toren />}></Route>

          <Route path='/Snacks' element={<Snacks />}></Route>
          <Route path='/Black-sesame-balls' element={<Blacksesameballs />}></Route>
          <Route path='/Banana-chips' element={<Bananachips />}></Route>
          <Route path='/Garlic-mixture' element={<Garlicmixture />}></Route>
          <Route path='/Kadalai-parupu' element={<Kadalaiparupu />}></Route>
          <Route path='/Hot-mixture' element={<Hotmixture />}></Route>
          <Route path='/Kamarcut' element={<Kamarcut />}></Route>
          <Route path='/Peanut-chikkies' element={<Peanutchikkies />}></Route>
          <Route path='/Peanut-chilli' element={<Peanutchilli />}></Route>
          <Route path='/Peanut-pepper' element={<Peanutpepper />}></Route>
          <Route path='/Peanut-salt' element={<Peanutsalt />}></Route>
          <Route path='/Tapioca-chips' element={<Tapiocachips />}></Route>
          <Route path='/Tapioca-stick' element={<Tapiocastick />}></Route>
          <Route path='/Thattai-vadai' element={<Thattaivadai />}></Route>
          <Route path='/White-sesame-balls' element={<Whitesesameballs />}></Route>
          <Route path='/Chikpeas' element={<Chikpeas />}></Route>
          <Route path='/Peanut-chikki-powder' element={<Peanutchikkipowder />}></Route>

          <Route path='/Beeda' element={<Beeda />}></Route>
          <Route path='/Cardamomseeds' element={<Cardamomseeds/>}></Route>
          <Route path='/Dryclove' element={<Dryclove/>}></Route>
          <Route path='/Kanpuribiscuit' element={<Kanpuribiscuit/>}></Route>
          <Route path='/Rosegulkand' element={<Rosegulkand/>}></Route>
          <Route path='/Shreddedcoconut' element={<Shreddedcoconut/>}></Route>
          <Route path='/Sweetjeeramittai' element={<Sweetjeeramittai/>}></Route>
          <Route path='/Sweetpanchutni' element={<Sweetpanchutni/>}></Route>
          <Route path='/Drytuttifrutti' element={<Drytuttifrutti/>}></Route>

          <Route path='/ContactForm' element={<ContactForm />}></Route>
          <Route path='/Certificate' element={<Certificate />}></Route>

          <Route path='/Vegetables' element={<Vegetables />}></Route>
          <Route path='/Vegbottle' element={<Vegbottle />}></Route>
          <Route path='/Brinjal' element={<Brinjal />}></Route>
          <Route path='/Vegetablebroccolie' element={<Vegetablebroccolie />}></Route>
          <Route path='/Cabbage' element={<Cabbage />}></Route>
          <Route path='/Cauliflower' element={<Cauliflower />}></Route>
          <Route path='/Drumstick' element={<Drumstick />}></Route>
          <Route path='/Greenchilli' element={<Greenchilli />}></Route>
          <Route path='/Ladyfinger' element={<Ladyfinger />}></Route>
          <Route path='/Mushroom' element={<Mushroom />}></Route>
          <Route path='/Onion' element={<Onion />}></Route>
          <Route path='/Potato' element={<Potato />}></Route>
          <Route path='/Spinach' element={<Spinach />}></Route>

          <Route path='/Pickles' element={<Pickle/>}></Route>

          <Route path='/Oil' element={<Oil/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  )
}

export default App
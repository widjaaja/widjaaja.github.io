import React, { Component } from 'react';
import vueLogo from './images/vue.png';
import tailwindcss from "./images/tailwindcss.svg";
import Modal from "./components/modal";

class App extends Component  {
  constructor() {
    super();

    this.state = {
        isShowing: false
    }
  }

  openModalHandler = () => {
      this.setState({
          isShowing: true
      });
  }

  closeModalHandler = () => {
      this.setState({
          isShowing: false
      });
  }
  render () {
    const styles = { 
      transform: `scale(1, 1) translate(0px, 0px)` 
    };
    let section3 = []
    for (const i of [1,2,3]) {
      section3.push(<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                <img  style={{height: "13vh", width: "7vw"}} src={vueLogo} alt="Logo" />
              </div>)
    }
  return (
    <div className="App">
      <header className="App-header mx-auto">
        <div class="flex flex-col bg-gray-200">
          <div class="flex bg-gray-200">
            <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4">
              <div class="flex flex-col bg-gray-200">
                <div class="text-gray-700 font-sans text-center text-8xl leading-tight bg-gray-400 px-4">Widjaaja</div>
                <div class="text-gray-700 text-center text-base bg-gray-400 px-4 tracking-widest">Life & Business Coach</div>
              </div>
            </div>
          </div>
          <div class="flex bg-gray-200 justify-center my-12 relative" style={{height: "75vh"}}>
            <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 absolute left-43 inset-y-auto">
              <div style={{height: "82vh", width: "34vw"}}></div>
            </div>
            <div class="flex flex-col bg-gray-200 my-16 absolute left-20 inset-y-auto">
              <div class="text-gray-700 text-center text-2/3xl tracking-widest bg-gray-400 px-6 py-4 my-2">IT'S TIME TO QUIT</div>
              <div class="text-gray-700 text-center text-2/3xl tracking-widest bg-gray-400 py-3 my-2">THE TIRING HUSTLE</div>
              <div class="text-gray-700 text-center text-2/3xl tracking-widest bg-gray-400 py-3 my-2">& BREAK FREE TO</div>
              <div class="text-gray-700 text-center text-2/3xl tracking-widest bg-gray-400 py-3 my-2">IT'S TIME TO QUIT</div>
              <div class="text-gray-700 px-4 py-2 my-2 ">
                <div class="text-sm w-5/12 ">
                  <span class="">DON'T WORRY... I'VE GOT A PLAN TO SHOW YOU HOW.</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-row bg-gray-200 justify-center mt-16 mb-14 mx-40">
            <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 mx-6">
              <div style={{width: '22vw'}} ></div>
            </div>
            <div class="flex flex-col bg-gray-200">
              <div class="text-gray-700 bg-gray-400 px-4 pt-2 mt-8 mb-1">
                <div class="text-gray-700 text-5/6xl font-sans leading-none bg-gray-400 ">Hey, I'm Adjie wijaya kusuma</div>
                <div class="text-gray-700 text-right tracking-widest text-sm uppercase bg-gray-400">life coach for busy women on a mission</div>
              </div>
              <div class="flex flex-row bg-gray-200 text-sm max-w-xl">
                <div class="text-gray-700 bg-gray-400 px-4 py-1 mx-2">
                  Swag tbh asymmetrical, activated charcoal schlitz tattooed arcoal schlitz tattooed roof party master cleaLorem ipsum dolor amet yr poke distillery chicharrones green juice gentrify subway tile paleo fingerstache hell of chartreuse brunch. Food truck jianbing gastropub schlitz, hammock wolf chia vice. Keytar freegan biodiesel, bushwick roof party put a bird on it venmo seitan flexitarian. Poke bitters williamsburg, freegan keytar poutine cardigan chia.
                </div>
                <div class="text-gray-700 bg-gray-400 px-4 py-1 mx-2">
                  Microdosing lo-fi everyday carry lyft thundercats. Four loko meh umami pop-up. Migas succulents artisan ennui prism. Fixie sriracha taxidermy brooklyn art party. Occupy small batch leggings paleo bespoke kinfolk yuccie pok pok affogato vinyl put a bird on it. Normcore tattooed tumeric synth, edison bulb tilde semiotics glossier cray fingerstache. Next level salvia shoreditch, master cleanse stumptown fanny pack pitchfork
                </div>
              </div>
              <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 mt-8">3</div>
            </div>
          </div>
          <div class="flex bg-gray-600 mt-10 mx-auto">
            <div class="flex flex-col bg-gray-200">
              <div class="text-gray-700 text-center tracking-widests text-base bg-gray-400 px-4 py-2 m-2 uppercase">As Technology in </div>
              <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                <div class="flex flex-row bg-gray-200">
                  {section3}
                </div>
              </div>
            </div>
          </div>
          <div class="flex bg-gray-400 mt-8 py-8 mx-auto">
            <div class="flex flex-col bg-gray-200 mx-64">
              <div class="text-gray-700 text-center bg-gray-400 px-4 m-2">
                <div class="inline-flex bg-gray-200">
                  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-1 py-2">
                    <div class="sie-pull-quote_3 se" style={styles, {height: "1.8vh", width: "2.3vw"}}><div class="se-icon"><svg style={{fill: '#bac5ca'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"></path></svg></div></div>
                  </div>
                  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-1 py-2">
                    <div class="sie-pull-quote_3 se" style={styles, {height: "1.8vh", width: "2.3vw"}}><div class="se-icon"><svg style={{fill: '#bac5ca'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"></path></svg></div></div>
                  </div>
                  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-1 py-2">
                    <div class="sie-pull-quote_3 se" style={styles, {height: "1.8vh", width: "2.3vw"}}><div class="se-icon"><svg style={{fill: '#bac5ca'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"></path></svg></div></div>
                  </div>
                  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-1 py-2">
                    <div class="sie-pull-quote_3 se" style={styles, {height: "1.8vh", width: "2.3vw"}}><div class="se-icon"><svg style={{fill: '#bac5ca'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"></path></svg></div></div>
                  </div>
                  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-1 py-2">
                    <div class="sie-pull-quote_3 se" style={styles, {height: "1.8vh", width: "2.3vw"}}><div class="se-icon"><svg style={{fill: '#bac5ca'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"></path></svg></div></div>
                  </div>
                </div>
              </div>
              <div class="text-gray-700 text-center text-3xl tracking-widests bg-gray-400 px-4 py-2 m-2">"WORKING WITH NICOLE TRULY TRANSFORMED MY LIFE & BUSINESS. I'M FOREVER A FAN!!"</div>
              <div class="text-gray-700 text-center text-sm tracking-widests bg-gray-400 px-4 ">— CELESTE W</div>
            </div>
          </div>
          {/* <div class="flex flex-col bg-gray-200 my-2">
              <div class="text-gray-700 text-center bg-gray-400 px-4 py-2">
                <div class="flex flex-col bg-gray-200 mx-64">
                  <div class="text-gray-700 text-center text-3xl tracking-widests font-medium bg-gray-400 px-4 py-4">HAVE A HANDSOME HOME</div>
                  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim diam nonummy tincidunt ut laoreet dolore</div>
                  <div class="text-gray-700 text-center bg-gray-400 px-4 py-10">3</div>
                </div>
              </div>
              <div class="text-gray-700 text-center bg-gray-400 px-4 py-2">
                <div class="flex flex-col bg-gray-200">
                  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    <div class="flex flex-row bg-gray-200">
                      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
                      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                        <div class="flex flex-col bg-gray-200">
                          <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
                          <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
                        </div>
                      </div>
                      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                        <div class="flex flex-col bg-gray-200">
                          <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
                          <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
                  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
                </div>
              </div>
            </div> */}
          <div class="flex bg-gray-600 mx-auto ">
            <div class="flex flex-col bg-gray-200 py-8 mx-super px-16" style={{'margin-top': '12vh', 'margin-bottom': '12vh' }}>
              <div class="text-gray-700 text-center font-medium text-xl tracking-widests bg-gray-400">JOIN THE FUN! LET'S WORK TOGETHER!</div>
              <div class="text-gray-700 text-center text-sm bg-gray-400 my-2 ">Tote bag vinyl pabst, cronut chia 8-bit su pour-over fanny pack bicycle rights typewriter disrupt.</div>
              <div class="text-gray-700 text-center bg-gray-400 px-4 my-2" onClick={this.openModalHandler}>3</div>
            </div>
          </div>
        </div>
        <div class="flex bg-gray-200">
          <div class="flex-auto text-gray-700 text-xs uppercase font-semibold tracking-wider text-center bg-gray-400 py-1">
            Designed by Adjie wijaya kusuma
          </div>
        </div>
      </header>
    </div>
  );
}
}

export default App;

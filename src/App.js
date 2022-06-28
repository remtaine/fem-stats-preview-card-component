// import logo from './logo.svg';
import design from './images/image-header-mobile.jpg';

function App() {
  return (
    <div className="App min-h-screen flex gap-2 flex-col items-center bg-fem-100 text-fem-400">
      <section className="flex items-center justify-center min-h-[calc(100vh-3rem)] w-full">
        <div className="flex flex-col lg:flex-row-reverse max-w-[930px] lg:h-[375px] mx-6 my-4">
          <div className="w-full h-auto relative">
            <img src={design} alt="design" className="bg-fem-300 lg:rounded-r-lg lg:rounded-tl-none rounded-t-lg object-cover h-full w-full"></img>
            <div class="bg-fem-300/50 w-full h-full lg:rounded-r-lg lg:rounded-tl-none rounded-t-lg absolute bottom-0 opacity-100 z-50 duration-500"></div>
          </div>
          <section className="bg-fem-200 lg:max-w-[465px] rounded-b-lg pt-6 pb-2 px-3 flex flex-col gap-2 items-center lg:items-start">
            <div className="lg:pl-8 lg:pr-12 lg:py-6">
              <h1 className="text-center lg:text-left text-2xl font-bold">Get <span className="text-fem-300">insights</span> that help your business grow.</h1>
              <p className="text-center lg:text-left text-fem-600 text-sm lg:text-xs lg:mt-4 font-extralight leading-loose">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
              <div className="flex gap-4 lg:gap-6 flex-col lg:flex-row my-3 lg:mt-12">
                <span className="flex flex-col items-center lg:items-start">
                  <h2 className="font-bold">10k+</h2> <span className="text-fem-600 uppercase font-extralight text-xs">companies</span>
                </span>
                <span className="flex flex-col items-center lg:items-start">
                  <h2 className="font-bold">314</h2> <span className="text-fem-600 uppercase font-extralight text-xs">templates</span>
                </span>
                <span className="flex flex-col items-center lg:items-start">
                  <h2 className="font-bold uppercase">12m+</h2> <span className="text-fem-600 uppercase font-extralight text-xs">queries</span>
                </span>
              </div>
            </div>
          </section>
        </div>
      </section>
      <footer className="mb-2 text-xs text-center w-full whitespace-normal">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" class="underline">Frontend Mentor</a> | 
    Coded by <a href="https://github.com/remtaine" class="underline">Ben</a></footer>
    </div>
  );
}

export default App;

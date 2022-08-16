import { CTA, Description, Features, Footer, Header, Hero, Testimonials } from './components';

const App = () => (
  <div className="relative bg-dark-blue-main text-white overflow-hidden font-open-sans text-sm">
    <>
      <Header />
      <Hero />
      <Features />
      <Description />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  </div>
)

export default App
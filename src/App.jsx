import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { createContext, lazy, Suspense, useState, useEffect } from "react";
import {
  Header,
  Footer,
  About,
  Contact,
  FAQ,
  VideoSection,
  QRSection,
  Photography,
  Loading,
  AdminContacts,
  AdminUpdate,
  AdminLayout,
  AdminUsers,
  Register,
  Login,
  Logout,
  Service,
  Error,
  Photoinfo1,
  Photoinfo2,
  Photoinfo3,
  Photoinfo4,
  Photoinfo5,
  Photoinfo6,
  Photoinfo7,
  Photoinfo8,
  Photoinfo9,
  ScanVideo,
  MScan,
  CusScan,
  CusScan2,
  CusAfter,
  Hotel,
  Home,
  Courier,
  FireCrakers,
  Cars,
  Memories,
  Catering,
  CardsPartners,
  CardMahalSection,
  CateringMain,
  YourMenu,
  CateringSection,
  QrCards,
  LoginForImage,
  MakeUp,
} from "./pages/index.js";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const ThemeContext = createContext("light");
const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <Router>
      <ScrollToTop />
      <ThemeContext.Provider value={theme}>
        <Header setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/photography"
            element={
              <Suspense fallback={<Loading />}>
                <Photography />
              </Suspense>
            }
          />
          <Route
            path="/videos"
            element={
              <Suspense fallback={<Loading />}>
                <VideoSection />
              </Suspense>
            }
          />
          <Route
            path="/cardmahal"
            element={
              <Suspense fallback={<Loading />}>
                <CardMahalSection />
              </Suspense>
            }
          />
          <Route
            path="/qr"
            element={
              <Suspense fallback={<Loading />}>
                <QRSection />
              </Suspense>
            }
          />
          <Route 
            path="/qrcards"
            element={
              <Suspense fallback={<div>Loading QR Special Cards...</div>}> 
                <QrCards />
              </Suspense>
            }
          />
          <Route path="/Photoinfo1" element={<Suspense fallback={<Loading />}> <Photoinfo1 /></Suspense>} />
          <Route path="/Photoinfo2" element={<Suspense fallback={<Loading />}> <Photoinfo2 /></Suspense>} />
          <Route path="/Photoinfo3" element={<Suspense fallback={<Loading />}> <Photoinfo3 /></Suspense>} />
          <Route path="/Photoinfo4" element={<Suspense fallback={<Loading />}> <Photoinfo4 /></Suspense>} />
          <Route path="/Photoinfo5" element={<Suspense fallback={<Loading />}> <Photoinfo5 /></Suspense>} />
          <Route path="/Photoinfo6" element={<Suspense fallback={<Loading />}> <Photoinfo6 /></Suspense>} />
          <Route path="/Photoinfo7" element={<Suspense fallback={<Loading />}> <Photoinfo7 /></Suspense>} />
          <Route path="/Photoinfo8" element={<Suspense fallback={<Loading />}> <Photoinfo8 /></Suspense>} />
          <Route path="/Photoinfo9" element={<Suspense fallback={<Loading />}> <Photoinfo9 /></Suspense>} />
          <Route path="/FireCrackers" element={<Suspense fallback={<Loading />}> <FireCrakers /></Suspense>} />
          <Route path="/memories" element={<Suspense fallback={<Loading />}> <Memories /></Suspense>} />
          <Route path="/Hotel" element={<Suspense fallback={<Loading />}> <Hotel /></Suspense>} />
          <Route path="/MScan" element={<Suspense fallback={<Loading />}> <MScan /></Suspense>} />
          <Route path="/Scan/:inviteId" element={<Suspense fallback={<Loading />}> <ScanVideo /></Suspense>} />
          <Route path="/register" element={<Suspense fallback={<Loading />}><Register /></Suspense>} />
          <Route path="/login" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
          <Route path="/logout" element={<Suspense fallback={<Loading />}><Logout /></Suspense>} />
          <Route path="/service" element={<Suspense fallback={<Loading />}><Service /></Suspense>} />
          <Route path="/makeup" element={<Suspense fallback={<Loading />}><MakeUp /></Suspense>} />
          <Route path="/CateringMain" element={<Suspense fallback={<Loading />}><CateringMain /></Suspense>} />
          <Route path="/Catering" element={<Suspense fallback={<Loading />}><Catering /></Suspense>} />
          <Route path="/CateringSection" element={<Suspense fallback={<Loading />}><CateringSection /></Suspense>} />
          <Route path="/yourmenu" element={<Suspense fallback={<Loading />}><YourMenu /></Suspense>} />
          <Route path="/images" element={<Suspense fallback={<Loading />}><LoginForImage /></Suspense>} />
          {/* <Route path="/Photo/:1" element={<Photo/>} /> */}
          <Route path="/Cards" element={<CardsPartners/>} />
          {/* <Route path="/:inviteId" element={<CusScan />} />  */}
          <Route path="/:inviteId" element={<CusScan2 />} />
          <Route path="/Courier" element={<Courier />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/CusAfter"  element={<CusAfter/>} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<Suspense fallback={<Loading />}><AdminLayout /></Suspense>}>
            <Route path="users" element={<Suspense fallback={<Loading />}><AdminUsers /></Suspense>} />
            <Route path="contacts" element={<Suspense fallback={<Loading />}><AdminContacts /></Suspense>} />
            <Route path="users/:id/edit" element={<Suspense fallback={<Loading />}><AdminUpdate /></Suspense>} />
          </Route>
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
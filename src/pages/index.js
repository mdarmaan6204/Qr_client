import { lazy } from "react";

const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));
const About = lazy(() => import("./About"));
const FAQ = lazy(() => import("./Home/FAQ"));
const Contact = lazy(() => import("./Contact"));
const Home = lazy(() => import("./Home/Home"));
const VideoSection = lazy(() => import("./Videos/VideoSection"));
const Photography = lazy(() => import("./Photography/Photography"));
const QRSection = lazy(() => import("./Qrs/QRSection"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const Logout = lazy(() => import("./Logout"));
const Service = lazy(() => import("./Service/Service"));
const Error = lazy(() => import("./Error"));
const AdminLayout = lazy(() => import("./Admin/AdminLayout"));
const AdminUsers = lazy(() => import("./Admin/AdminUsers"));
const AdminContacts = lazy(() => import("./Admin/AdminContacts"));
const AdminUpdate = lazy(() => import("./Admin/AdminUpdate"));
const Loading = lazy(() => import("./Loading"));
const Photoinfo1 = lazy(() => import("./Photography/Photoinfo1"));
const Photoinfo2 = lazy(() => import("./Photography/Photoinfo2"));
const Photoinfo3 = lazy(() => import("./Photography/Photoinfo3"));
const Photoinfo4 = lazy(() => import("./Photography/Photoinfo4"));
const Photoinfo5 = lazy(() => import("./Photography/Photoinfo5"));
const Photoinfo6 = lazy(() => import("./Photography/Photoinfo6"));
const Photoinfo7 = lazy(() => import("./Photography/Photoinfo7"));
const Photoinfo8 = lazy(() => import("./Photography/Photoinfo8"));
const Photoinfo9 = lazy(() => import("./Photography/Photoinfo9"));
const FireCrakers = lazy(() => import("./FireCrakers/FireCrackers"));
const MScan = lazy(() => import("./Scan/MScan"));
const ScanVideo = lazy(() => import("./Scan/ScanVideo"));
const CusScan = lazy(() => import("./Scan/CusScan"));
const CusScan2 = lazy(() => import("./Scan/CusScan2"));
const Hotel = lazy(() => import("./Hotel/Hotel"));
const Courier = lazy(() => import("./Courier"));
const Cars = lazy(() => import("./Car/Cars"));
const CusAfter = lazy(() => import("./Scan/CusAfter"));
const Photo = lazy(() => import("./Photography/Photo"));
const Memories = lazy(() => import("./Scan/AfterMarriage"));
const CardsPartners = lazy(() => import("./Cards/CardsPartners"));
const CardMahalSection = lazy(() => import("./Cards/CardMahalSection"));
const CateringMain = lazy(() => import("./Catering/CateringMain"));
const Catering = lazy(() => import("./Catering/Catering"));
const YourMenu = lazy(() => import("./Catering/YourMenu"));
const CateringSection = lazy(() => import("./Catering/CateringSection"));
const LoginForImage = lazy(() => import("./LoginForImage"));
const QrCards = lazy(() => import("./Cards/QrCards"));
const MakeUp = lazy(() => import("./MakeUp/MakeUp"));

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export {
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
  Home,
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
  Photo,
  Catering,
  FireCrakers,
  ScanVideo,
  MScan,
  CusScan,
  CusScan2,
  CusAfter,
  Hotel,
  Courier,
  Cars,
  Memories,
  CardsPartners,
  QrCards,
  CardMahalSection,
  CateringMain,
  YourMenu,
  CateringSection,
  LoginForImage,
  MakeUp,
};
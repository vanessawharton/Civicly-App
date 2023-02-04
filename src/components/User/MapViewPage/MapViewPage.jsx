import ReportsMap from "../ReportsMap/ReportsMap";
import Nav from '../NavMenu/NavMenu';
import Header from '../Header/Header';
import ReportCarousel from "../ReportsCarousel/ReportsCarousel";

function MapViewPage() {
  return (
    <>
      <Header />
      <ReportsMap />
      <ReportCarousel />
      <Nav />
    </>
  )
}
export default MapViewPage;

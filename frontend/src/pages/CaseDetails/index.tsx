import style from '../../components/CaseDetalis/css/CaseDetails.module.css';
import CaseDetailsContent from '../../components/CaseDetalis/CaseDetailsContent';
import CaseDetailsIndex from '../../components/CaseDetalis/CaseDetailsIndex';
import CaseDetailsIntroduction from '../../components/CaseDetalis/CaseDetailsIntroduction';
import Footer from '../../components/Footer';

const CaseDetails: React.FC = () => {
  return (
    <div className={style.case_detais_body}>
        <CaseDetailsIntroduction />
        <CaseDetailsIndex />
        <CaseDetailsContent />
        <Footer />
    </div>
  );
};

export default CaseDetails;

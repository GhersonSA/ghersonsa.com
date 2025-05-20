import { useNavigate, useLocation } from 'react-router-dom';

const useNavigateAndScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateAndScroll = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return navigateAndScroll;
};

export default useNavigateAndScroll;

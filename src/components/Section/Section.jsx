import PropTypes from 'prop-types';
import { Wrapper } from 'components/Section/SectionStyled.styled';

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {children}
    </Wrapper>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

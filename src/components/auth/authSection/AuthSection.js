import s from './AuthSection.module.css';

const AuthSection = ({ children, as = 'section'}) => {
  const TagName = as;

  return <TagName className={s.section}>{children}</TagName>;

};
AuthSection.propTypes = {};

export default AuthSection;
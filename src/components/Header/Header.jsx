import Logo from 'components/Logo';

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Logo />
        <span className="logo-container__text">Chuck Norris</span>
      </div>
    </header>
  );
}

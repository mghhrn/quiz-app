import logoImg from '../assets/quiz-logo.png';

export default function Header() {
    return <header>
        <img alt='quiz logo' src={logoImg} />
        <h1>ReactQuiz</h1>
    </header>
}
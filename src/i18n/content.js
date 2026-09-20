import portfolios from "../portfolio.json" with { type: "json" };
import { defaultLocale, isLocale } from "./locales.js";

export const siteCopy = {
  en: {
    greeting: "Hello There 👋",
    introduction: "I'm Wisnu!",
    bio: "Backend Engineer 👨‍💻 with 1 year of experience, 10+ projects successfully built, and 4 hackathon wins 🏆. Highly proficient in backend development across multiple programming languages 🛠, frameworks, databases, and cloud platforms ⛅, with working knowledge of DevOps practices including cloud infrastructure, deployment, Linux, virtualization, containerization, and CI/CD. Able to adapt quickly to new environments, collaborate with cross-functional teams, and translate business requirements into high-quality applications.",
    downloadCv: "Download My CV",
    github: "GitHub",
    linkedin: "LinkedIn",
    projectsHeading: "Let's Look at My Awesome Projects 👀",
    all: "All",
    watch: "Watch",
    demo: "Demo",
    closeModal: "Click anywhere to close",
    languageLabel: "日本語",
    switchLanguage: "Switch language to",
    seoTitle: "Wisnu Putra | Backend Engineer Portfolio",
    seoDescription: "Wisnu Putra is a backend engineer showcasing projects across backend development, cloud platforms, DevOps, and AI-powered applications.",
  },
  ja: {
    greeting: "こんにちは 👋",
    introduction: "Wisnu Putraです！",
    bio: "バックエンドエンジニアとして1年の実務経験を持ち、10件以上のプロジェクトを構築し、IT大会で4回の入賞を経験しています。複数のプログラミング言語、フレームワーク、データベース、クラウドプラットフォームを活用したバックエンド開発に精通しており、クラウドインフラ、デプロイ、Linux、仮想化、コンテナ化、CI/CDなどのDevOpsの実務知識も有しています。新しい環境にも迅速に適応でき、部門を超えたチームと協働しながら、ビジネス要件を高品質なアプリケーションへと具現化することができます。",
    downloadCv: "履歴書をダウンロード",
    github: "GitHub",
    linkedin: "LinkedIn",
    projectsHeading: "プロジェクトをご覧ください 👀",
    all: "すべて",
    watch: "視聴する",
    demo: "デモ",
    closeModal: "任意の場所をクリックして閉じる",
    languageLabel: "EN",
    switchLanguage: "言語を切り替える：",
    seoTitle: "Wisnu Putra | バックエンドエンジニア ポートフォリオ",
    seoDescription: "Wisnu Putraのバックエンドエンジニアとしてのポートフォリオです。バックエンド開発、クラウド、DevOps、AI活用アプリケーションのプロジェクトを紹介しています。",
  },
};

export function getPageContent(locale) {
  const resolvedLocale = isLocale(locale) ? locale : defaultLocale;

  return {
    locale: resolvedLocale,
    copy: siteCopy[resolvedLocale],
    portfolios: portfolios.map(({ title, description, winner, ...portfolio }) => ({
      ...portfolio,
      title: title[resolvedLocale],
      description: description[resolvedLocale],
      ...(winner ? { winner: winner[resolvedLocale] } : {}),
    })),
  };
}
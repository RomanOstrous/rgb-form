interface ImportMetaEnv {
  readonly VITE_TELEGRAM_BOT_TOKEN: string;
  readonly VITE_TELEGRAM_BOT_ID: string;
  // додайте інші змінні середовища, якщо необхідно
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

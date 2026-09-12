function MarkIcon({ type }: { type: 'shield' | 'spark' | 'arrow' | 'check' }) {
  if (type === 'shield') {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="rox-icon"><path d="M12 3 19 6v5c0 4.6-2.9 8.5-7 10-4.1-1.5-7-5.4-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>
  }
  if (type === 'spark') {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="rox-icon"><path d="m12 2 1.5 7.1L20 12l-6.5 2.9L12 22l-1.5-7.1L4 12l6.5-2.9L12 2Z"/></svg>
  }
  if (type === 'arrow') {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="rox-icon"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="rox-icon"><path d="m5 12 4 4L19 6"/></svg>
}

export default function Page() {
  return (
    <main className="rox-page">
      <header className="rox-header">
        <div className="rox-container rox-header-inner">
          <a className="rox-brand" href="#top" aria-label="Rox Casino — на главную">
            <span className="rox-brand-mark"><span>R</span></span>
            <span>ROX <b>CASINO</b></span>
          </a>
          <nav className="rox-nav" aria-label="Основная навигация">
            <a href="#about">Обзор</a>
            <a href="#games">Игры</a>
            <a href="#mirror">Зеркало</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="rox-header-button" href="#official">Перейти на сайт <MarkIcon type="arrow" /></a>
        </div>
      </header>

      <section className="rox-hero" id="top">
        <div className="rox-hero-glow" aria-hidden="true" />
        <div className="rox-container rox-hero-grid">
          <div className="rox-hero-copy">
            <p className="rox-kicker"><span className="rox-live-dot" /> Навигация по платформе</p>
            <h1>Rox Casino — официальный сайт и рабочее зеркало</h1>
            <p className="rox-lead">Понятный гид по Rox Casino: как найти официальный вход, проверить зеркало и начать играть онлайн с комфортом и ответственным подходом.</p>
            <div className="rox-hero-actions">
              <a className="rox-button rox-button-primary" href="#official">Открыть официальный сайт <MarkIcon type="arrow" /></a>
              <a className="rox-button rox-button-quiet" href="#mirror">Найти рабочее зеркало</a>
            </div>
            <div className="rox-proof-row" aria-label="Преимущества">
              <span><MarkIcon type="shield" /> Защищённый вход</span>
              <span><MarkIcon type="check" /> Быстрая навигация</span>
              <span><MarkIcon type="spark" /> Игра 18+</span>
            </div>
          </div>
          <div className="rox-hero-art" aria-label="Иллюстрация Rox Casino" role="img">
            <div className="rox-orbit rox-orbit-one" />
            <div className="rox-orbit rox-orbit-two" />
            <div className="rox-emblem"><span>R</span><small>ROX</small></div>
            <div className="rox-chip rox-chip-top">ONLINE</div>
            <div className="rox-chip rox-chip-bottom">18+</div>
            <div className="rox-card rox-card-left"><span>♠</span><b>R</b></div>
            <div className="rox-card rox-card-right"><span>♦</span><b>7</b></div>
          </div>
        </div>
      </section>

      <section className="rox-trust-strip" aria-label="Ключевая информация">
        <div className="rox-container rox-trust-grid">
          <div><strong>01</strong><span>Официальный адрес</span></div>
          <div><strong>02</strong><span>Актуальное зеркало</span></div>
          <div><strong>03</strong><span>Игры в браузере</span></div>
          <div><strong>04</strong><span>Поддержка 24/7</span></div>
        </div>
      </section>

      <div className="rox-container rox-main-layout">
        <article className="rox-article">
          <section className="rox-section" id="about">
            <p className="rox-eyebrow">01 / Обзор платформы</p>
            <h2>Rox Casino официальный сайт: что важно знать перед входом</h2>
            <p>Rox Casino — онлайн-платформа с каталогом азартных игр, где пользователь может выбрать слот, настольную игру или live-раздел и открыть его прямо в браузере. Запрос <strong>rox casino официальный сайт</strong> обычно означает поиск актуального адреса без лишних переходов, рекламных копий и сомнительных страниц.</p>
            <p>Главная задача этого материала — помочь быстро сориентироваться. Перед тем как вводить логин, пароль или платёжные данные, внимательно проверьте домен, наличие защищённого соединения и единый стиль официальной страницы. Настоящий вход не просит установить неизвестное расширение, передать код из SMS постороннему человеку или внести депозит для «разблокировки» аккаунта.</p>
            <div className="rox-note"><MarkIcon type="shield" /><div><strong>Правило безопасного входа</strong><p>Сохраняйте адрес в закладках только после проверки домена и не переходите по ссылкам из случайных комментариев.</p></div></div>
          </section>

          <section className="rox-section rox-split-section" id="official">
            <div>
              <p className="rox-eyebrow">02 / Прямой вход</p>
              <h2>Как найти Rox Casino официальный вход</h2>
              <p>Поисковая фраза <strong>rox casino официальный</strong> часто используется теми, кто уже знаком с брендом и хочет попасть именно на первоисточник. У официального сайта обычно единая визуальная система, понятные разделы, форма авторизации и доступная служба поддержки.</p>
              <p>Проверьте строку браузера: адрес должен начинаться с <strong>https://</strong>, а соединение — отображаться как защищённое. Не доверяйте страницам с похожими названиями, дополнительными символами или обещаниями «гарантированного выигрыша». Ни один легальный сервис не может гарантировать результат игры.</p>
            </div>
            <div className="rox-checklist">
              <h3>Перед входом проверьте</h3>
              <ul>
                <li><MarkIcon type="check" /> Точный адрес страницы</li>
                <li><MarkIcon type="check" /> HTTPS-соединение</li>
                <li><MarkIcon type="check" /> Контакты поддержки</li>
                <li><MarkIcon type="check" /> Возрастное ограничение</li>
              </ul>
            </div>
          </section>

          <section className="rox-section" id="games">
            <p className="rox-eyebrow">03 / Игровой каталог</p>
            <h2>Рокс казино играть: форматы и возможности</h2>
            <p>Если вы вводите запрос <strong>рокс казино играть</strong> или <strong>rox casino играть</strong>, скорее всего, вам нужен быстрый переход к каталогу. После входа удобно начать с раздела, который соответствует вашему опыту и бюджету. Не обязательно открывать сразу много игр: спокойный выбор помогает лучше контролировать время и расходы.</p>
            <div className="rox-catalog-grid">
              <div className="rox-catalog-card"><span className="rox-number">A</span><h3>Слоты</h3><p>Популярный формат с простыми правилами, тематическими механиками и разной волатильностью.</p><a href="#faq">Узнать больше <MarkIcon type="arrow" /></a></div>
              <div className="rox-catalog-card"><span className="rox-number">K</span><h3>Настольные игры</h3><p>Классические варианты для тех, кто предпочитает знакомые правила и размеренный темп.</p><a href="#faq">Узнать больше <MarkIcon type="arrow" /></a></div>
              <div className="rox-catalog-card"><span className="rox-number">Q</span><h3>Live-игры</h3><p>Интерактивный формат с ведущим, который создаёт атмосферу настоящего игрового стола.</p><a href="#faq">Узнать больше <MarkIcon type="arrow" /></a></div>
            </div>
          </section>

          <section className="rox-section" id="mirror">
            <p className="rox-eyebrow">04 / Альтернативный адрес</p>
            <h2>Рокс казино зеркало: когда нужен рабочий адрес</h2>
            <p>Запросы <strong>рокс казино зеркало</strong> и <strong>рокс казино зеркало рабочее</strong> появляются, когда основной домен временно недоступен у конкретного интернет-провайдера. Зеркало — это альтернативный адрес с тем же интерфейсом и доступом к аккаунту, а не новая площадка с отдельными правилами.</p>
            <p>Используйте только зеркало, которое опубликовано в официальном канале поддержки или открывается из проверенного кабинета. Если ссылка пришла от неизвестного отправителя, не вводите на ней данные. Внимательно сравните логотип, структуру меню и адресную строку, но помните: внешний вид сам по себе не доказывает подлинность.</p>
            <div className="rox-mirror-panel"><div className="rox-mirror-status"><span className="rox-status-dot" /> Адрес проверен</div><strong>Доступ к Rox Casino</strong><p>Откройте официальный источник и сохраните актуальную ссылку в закладках.</p><a className="rox-button rox-button-primary" href="#top">Проверить доступ <MarkIcon type="arrow" /></a></div>
          </section>

          <section className="rox-section" id="online">
            <p className="rox-eyebrow">05 / Игра онлайн</p>
            <h2>Рокс казино онлайн: удобный доступ с телефона и компьютера</h2>
            <p>Rox Casino онлайн работает в браузере, поэтому для старта не требуется загружать отдельную программу. Адаптивный интерфейс подстраивается под экран смартфона, планшета или компьютера. Перед авторизацией убедитесь, что используете личное устройство и защищённую сеть.</p>
            <p>Мобильный формат удобен для коротких сессий, но он не отменяет базовых правил ответственной игры. Установите лимит расходов и времени заранее, не пытайтесь отыгрываться после неудачи и делайте перерывы. Азартные игры предназначены только для совершеннолетних и могут привести к финансовым потерям.</p>
            <div className="rox-responsibility"><div className="rox-responsibility-icon">18</div><div><h3>Ответственная игра — часть хорошего опыта</h3><p>Рассматривайте игру как развлечение, а не как способ заработка. Если контроль становится сложным, обратитесь за помощью к близким или профильным специалистам.</p></div></div>
          </section>

          <section className="rox-section" id="faq">
            <p className="rox-eyebrow">06 / Ответы</p>
            <h2>Частые вопросы о Rox Casino</h2>
            <div className="rox-faq-list">
              <details open><summary>Где найти Rox Casino официальный сайт?</summary><p>Используйте только адрес, указанный в официальных коммуникациях платформы. Проверьте домен, HTTPS и контакты поддержки перед авторизацией.</p></details>
              <details><summary>Что делать, если основной сайт не открывается?</summary><p>Проверьте соединение и статус доступа. Если проблема связана с ограничением провайдера, найдите актуальное зеркало через официальный канал поддержки, а не через случайные сайты.</p></details>
              <details><summary>Можно ли играть в Рокс казино онлайн с телефона?</summary><p>Да, браузерный формат подходит для смартфонов и планшетов. Используйте личное устройство, обновлённый браузер и не вводите данные в публичной сети.</p></details>
              <details><summary>Нужно ли скачивать приложение?</summary><p>Для базового доступа достаточно браузера. Не устанавливайте файлы с непроверенных страниц и обращайте внимание на разрешения, которые запрашивает приложение.</p></details>
              <details><summary>Как начать играть ответственнее?</summary><p>Определите бюджет до начала сессии, поставьте ограничение по времени и не воспринимайте игровой результат как источник дохода.</p></details>
            </div>
          </section>
        </article>

        <aside className="rox-aside" aria-label="Содержание страницы">
          <div className="rox-aside-card"><p className="rox-eyebrow">На этой странице</p><nav><a href="#about">Обзор Rox Casino</a><a href="#official">Официальный сайт</a><a href="#games">Каталог игр</a><a href="#mirror">Рабочее зеркало</a><a href="#online">Игра онлайн</a><a href="#faq">Частые вопросы</a></nav></div>
              <div className="rox-aside-card rox-keywords"><p className="rox-eyebrow">Поисковые запросы</p><div><span>rox casino</span><span>rox casino официальный</span><span>rox casino официальный сайт</span><span>рокс казино официальный</span><span>рокс казино официальный сайт</span><span>рокс казино</span><span>рокс казино зеркало</span><span>рокс казино зеркало рабочее</span><span>рокс казино играть</span><span>рокс казино онлайн</span><span>rox казино</span><span>rox casino играть</span></div></div>
          <div className="rox-aside-card rox-aside-dark"><MarkIcon type="spark" /><h3>Нужен быстрый вход?</h3><p>Начните с проверки официального адреса и сохраните его в закладках.</p><a href="#official">Перейти к входу <MarkIcon type="arrow" /></a></div>
        </aside>
      </div>

      <footer className="rox-footer">
        <div className="rox-container rox-footer-top"><a className="rox-brand" href="#top"><span className="rox-brand-mark"><span>R</span></span><span>ROX <b>CASINO</b></span></a><p>Информационный гид об официальном входе, зеркале и игре онлайн.</p><a className="rox-backtop" href="#top">Наверх <MarkIcon type="arrow" /></a></div>
        <div className="rox-container rox-footer-bottom"><span>© 2026 Rox Casino Guide</span><span>18+ · Играйте ответственно</span><span>Информация носит справочный характер</span><span className="rox-hashtags">#roxcasino · #роксказино · #зеркало · #игратьонлайн</span></div>
      </footer>
    </main>
  )
}

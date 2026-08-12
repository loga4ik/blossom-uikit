import { useRef, useState, type CSSProperties } from "react";
import { Button } from "./components/Button/Button";
import { FavoriteButton } from "./components/IconButton/FavoriteButton";
import { SizeSelector } from "./components/SizeSelector/SizeSelector";
import { SearchField } from "./components/SearchField/SearchField";
import { TextInput } from "./components/TextInput/TextInput";
import { DropDown, type DropDownOption } from "./components/DropDown/DropDown";
import { Autocomplete } from "./components/Autocomplete/Autocomplete";
import { FileInput } from "./components/FileInput/FileInput";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { LookCard } from "./components/LookCard/LookCard";
import { ItemCard } from "./components/ItemCard/ItemCard";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";
import { Modal } from "./components/Modal/Modal";
import { DressIllustration } from "./components/icons/DressIllustration";

const palette = [
  { name: "Пыльная роза", value: "var(--rose)" },
  { name: "Лаванда", value: "var(--lavender)" },
  { name: "Шалфей", value: "var(--sage)" },
  { name: "Тёплое золото", value: "var(--gold)" },
];

const eyebrowStyle: CSSProperties = {
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "var(--text-muted)",
  margin: "0 0 1rem",
  fontWeight: 500,
};

const wardrobeCatalog = [
  "Джинсы прямые",
  "Джинсы скинни",
  "Джинсовая куртка",
  "Платье миди «Ирис»",
  "Блуза шёлковая",
  "Блуза «Роза»",
  "Кроссовки белые",
];

const fakeDbSearch = (query: string): Promise<DropDownOption[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const matches = wardrobeCatalog
        .filter((name) => name.toLowerCase().includes(query.toLowerCase()))
        .map((name) => ({ value: name, label: name }));
      resolve(matches);
    }, 400);
  });

function App() {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [wardrobeOptions, setWardrobeOptions] = useState<DropDownOption[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRequestId = useRef(0);

  const handleWardrobeSearch = async (query: string) => {
    if (!query) {
      setWardrobeOptions([]);
      setIsSearching(false);
      return;
    }
    const requestId = ++searchRequestId.current;
    setIsSearching(true);
    const results = await fakeDbSearch(query);
    if (requestId === searchRequestId.current) {
      setWardrobeOptions(results);
      setIsSearching(false);
    }
  };

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2.75rem" }}>
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 30, margin: "0 0 0.35rem" }}>Blossom UI Kit</p>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: 0, maxWidth: "40ch" }}>
            Мягкий неоморфизм в пастельных тонах для приложения по подбору гардероба.
          </p>
        </div>
        <ThemeToggle />
      </div>

      <section style={{ marginBottom: "3rem" }}>
        <p style={eyebrowStyle}>Палитра</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 14 }}>
          {palette.map((color) => (
            <div key={color.name} style={{ borderRadius: 16, padding: "18px 16px 14px", boxShadow: "6px 6px 14px var(--shadow-dark), -6px -6px 14px var(--shadow-light)" }}>
              <div style={{ width: "100%", height: 44, borderRadius: 10, marginBottom: 10, background: color.value }} />
              <p style={{ fontSize: 13, fontWeight: 500, margin: 0 }}>{color.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <p style={eyebrowStyle}>Кнопки и переключатели</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <Button variant="primary">В корзину</Button>
          <Button variant="secondary">Подробнее</Button>
          <Button variant="ghost">Отменить</Button>
          <FavoriteButton />
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <p style={eyebrowStyle}>Выбор размера</p>
        <SizeSelector sizes={["XS", "S", "M", "L", "XL"]} defaultSize="S" />
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <p style={eyebrowStyle}>Поле поиска</p>
        <SearchField placeholder="Платье, блуза, юбка…" />
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <p style={eyebrowStyle}>Текстовое поле</p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <TextInput label="Имя получателя" placeholder="Анна Смирнова" />
          <TextInput label="Промокод" placeholder="BLOSSOM10" error="Такого промокода не существует" />
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <p style={eyebrowStyle}>Выпадающий список</p>
        <DropDown
          label="Категория"
          placeholder="Выберите категорию"
          options={[
            { value: "top", label: "Верх" },
            { value: "bottom", label: "Низ" },
            { value: "shoes", label: "Обувь" },
            { value: "accessory", label: "Аксессуар" },
          ]}
        />
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <p style={eyebrowStyle}>Автокомплит (поиск по БД)</p>
        <Autocomplete
          label="Вещь"
          placeholder="Начните вводить название…"
          options={wardrobeOptions}
          isLoading={isSearching}
          onChange={handleWardrobeSearch}
        />
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <p style={eyebrowStyle}>Загрузка файла</p>
        <FileInput label="Фото товара" hint="PNG или JPG, до 10 МБ" />
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <p style={eyebrowStyle}>Поверхность (Wrapper)</p>
        <Wrapper>
          <div style={{ padding: 20, fontSize: 14, color: "var(--text-secondary)" }}>
            Базовая приподнятая поверхность на --bg-secondary — под неё можно завернуть
            произвольный контент.
          </div>
        </Wrapper>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <p style={eyebrowStyle}>Карточка образа</p>
        <LookCard title="Платье миди «Ирис»" description="Лён, свободный крой" />
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <p style={eyebrowStyle}>Карточка вещи</p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <ItemCard title="Джинсы прямые" category="Низ" meta="3 нед." />
          <ItemCard title="Блуза шёлковая" category="Верх" meta="1 нед." defaultFavorite />
        </div>
      </section>

      <section>
        <p style={eyebrowStyle}>Быстрый просмотр (модальное окно)</p>
        <Button onClick={() => setQuickViewOpen(true)}>Открыть быстрый просмотр</Button>
      </section>

      <Modal open={quickViewOpen} onClose={() => setQuickViewOpen(false)}>
        <div style={{ height: 180, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <DressIllustration color="var(--rose)" colorDeep="var(--rose-deep)" />
        </div>
        <p style={{ fontFamily: "var(--font-display)", fontSize: 19, margin: "0 0 4px" }}>Блуза «Роза»</p>
        <p style={{ fontSize: 12, color: "var(--text-secondary)", margin: "0 0 10px" }}>Шёлк, свободный рукав</p>
        <p style={{ fontSize: 15, fontWeight: 500, margin: "0 0 14px" }}>3 290 ₽</p>
        <Button variant="primary" fullWidth onClick={() => setQuickViewOpen(false)}>
          В корзину
        </Button>
      </Modal>
    </div>
  );
}

export default App;

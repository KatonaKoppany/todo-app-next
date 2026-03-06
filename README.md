This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Futtatás

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Használt technológiák

A projekt során a következő technológiákat alkalmaztam:

Next.js – a projekt keretrendszere

shadcn/ui komponensek – gyors és egységes UI építéshez

Zustand – állapotkezeléshez

Tabler Icons – ikonokhoz

UUID – egyedi azonosítók generálásához

## Mit csinálnék másképp, ha több időm lenne?

Ha több idő állt volna rendelkezésre, saját, teljesen testreszabott UI könyvtárat építettem volna. Ebben minden komponenst úgy kötök be és terveznék, ahogy szeretném, a dizájn részleteit is pontosabban szabnám meg.

## Milyen problémákba ütköztem?

A shadcn/ui előre elkészített komponensei gyors megoldást adtak, de néhány esetben nem teljesen feleltek meg az elképzeléseimnek, ezért kompromisszumokra kényszerültem. Több függőség és a responsive kialakításnál adódó problémák is okoztak kihívást, amelyekhez plusz utómunkára lett volna szükség.

## Design koncepció

A cél egy egyszerű, tiszta Todo app UI megteremtése volt, semmi felesleges funkcióval vagy túlzott színvilággal. A shadcn komponensek ideális választásnak bizonyultak, mert egy semleges témával gyorsan és egységesen lehetett felépíteni a felületet.
Az egyszerű, jól áttekinthető felépítés lehetővé teszi, hogy a felhasználó könnyen navigáljon, és csak a szükséges adatokat lássa. A design fókusza a használhatóságon és a letisztultságon volt, minden vizuális elem célzottan jelenik meg.

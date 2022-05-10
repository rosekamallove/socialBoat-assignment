export default function Card({ heading, tags, text, video }) {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article class="overflow-hidden rounded-lg shadow-lg">
        <a href={video}>
          <img
            alt="Placeholder"
            class="block h-auto w-full"
            src="https://picsum.photos/600/400/?random"
          />
        </a>

        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 class="text-lg">
            <a class="no-underline hover:underline text-black" href={video}>
              {heading}
            </a>
          </h1>
        </header>

        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            class="flex items-center no-underline hover:underline text-black"
            href={video}
          >
            <img
              alt="Placeholder"
              class="block rounded-full"
              src="https://picsum.photos/32/32/?random"
            />
            <p class="ml-2 text-sm">{text}</p>
          </a>
        </footer>
      </article>
    </div>
  );
}

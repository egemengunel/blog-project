<template>
  <div>
    <section
      class="absolute top-0 z-0 w-full h-80 bg-slate-700 overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <h1 class="text-white text-4xl font-semibold font['Inter'] mb-8">
        Weclome To Blogie!
      </h1>
      <p class="text-white text-2xl font-normal font['Inter'] max-w-xl px-4">
        Discover, write and learn from the latest blogs
      </p>
    </section>

    <div class="mt-60">
      <section class="w-full bg-slate-200 overflow-hidden py-16">
        <div class="max-w-screen-xl mx-auto px-8">
          <h2 class="text-black text-3xl font-bold font['Inter'] mb-8">
            Discover Latest Blogs
          </h2>
          <div
            class="grid grid-cols-2 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            <cardView
              title-text="This is a title"
              subtitle="this is a prapagraph that gies below"
              image-url="/images/sample-image.jpg"
              blog-id="1"
            />
            <cardView
              title-text="This is a title"
              subtitle="this is a prapagraph that gies below"
              image-url="/images/sample-image.jpg"
              blog-id="2"
            />
            <cardView
              title-text="This is a title"
              subtitle="this is a prapagraph that gies below"
              image-url="/images/sample-image.jpg"
              blog-id="4"
            />
            <cardView
              title-text="This is a title"
              subtitle="this is a prapagraph that gies below"
              image-url="/images/sample-image.jpg"
              blog-id="5"
            />
            <cardView
              title-text="This is a title"
              subtitle="this is a prapagraph that gies below"
              image-url="/images/sample-image.jpg"
              blog-id="6"
            />
            <cardView
              title-text="This is a title"
              subtitle="this is a prapagraph that gies below"
              image-url="/images/sample-image.jpg"
              blog-id="7"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

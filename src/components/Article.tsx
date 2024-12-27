import { IMovieProps } from '@/types/types';

export function Article(props: IMovieProps) {
  const countries = props.countries.map(country => country.name).join(', ');
  const actors = props.persons.filter(person => person.enProfession == 'actor').map(person => person.name).join(', ');
  const director = props.persons.filter(person => person.enProfession == 'director').map(person => person.name).join(', ');
  const writers = props.persons.filter(person => person.enProfession == 'writer').map(person => person.name).join(', ');

  const hasLength = (length: number | string) => {
    if (length == '' || length == null) {
      return '—';
    }
    return length;
  }

  const hasYear = (year: number | string) => {
    if (year == '') {
      return '—';
    }
    return year;
  }

  const hasBoxOffice = (boxOffice: string | number) => {
    if (boxOffice == '' || boxOffice == undefined) {
      return '—';
    }
    return `${boxOffice}$`;
  }

  const hasBudget = (budget: string | number) => {
    if (budget == '' || budget == undefined) {
      return '—';
    }
    return `${budget}$`;
  }

  const hasCountries = (countries: string) => {
    if (countries == '') {
      return '—';
    }
    return countries;
  }

  const hasActors = (actors: string) => {
    if (actors == '') {
      return '—';
    }
    return actors;
  }

  const hasDirector = (director: string) => {
    if (director == '') {
      return '—';
    }
    return director;
  }

  const hasWriters = (writers: string) => {
    if (writers == '') {
      return '—';
    }
    return writers;
  }

  const metadata = [
    {
      label: 'Year',
      value: hasYear(props.year)
    },
    {
      label: 'Box Office',
      value: hasBoxOffice(props.fees?.world.value)
    },
    {
      label: 'Budget',
      value: hasBudget(props.budget?.value)
    },
    {
      label: 'Countries',
      value: hasCountries(countries)
    },
    {
      label: 'Actors',
      value: hasActors(actors)
    },
    {
      label: 'Director',
      value: hasDirector(director)
    },
    {
      label: 'Writers',
      value: hasWriters(writers)
    },
  ]

  return (
    <section aria-label="Movie article" className="flex-auto max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={props.poster.url}
            alt={`${props.name} movie poster`}
            className="object-contain shrink-0 max-w-full rounded-3xl aspect-[0.75] w-[266px] max-md:mt-10"
          />
        </div>
        <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
          <article className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col">
              <div className="flex gap-2 justify-center items-center self-start text-base font-medium whitespace-nowrap text-zinc-400">
                {props.genres.map((genre, index) => (
                  <div key={index} className="self-stretch my-auto">{genre.name}</div>
                ))}
              </div>
              <h1 className="text-4xl font-semibold dark:text-white">{props.name}</h1>
            </div>

            <div className="flex gap-5 justify-center items-center mt-6 text-base font-semibold">
              <div className="gap-2.5 self-stretch px-2 py-0.5 my-auto whitespace-nowrap bg-green-600 rounded-md">
                {props.rating.imdb}
              </div>
              <div className="gap-2.5 self-stretch px-2 py-0.5 my-auto rounded-md bg-neutral-400">
                {hasLength(props.movieLength)} min
              </div>
            </div>

            <div className="flex flex-col self-stretch mt-10 text-base max-md:max-w-full dark:text-white">
              <p className="font-medium leading-6 max-md:max-w-full">
                {props.description}
              </p>

              <div className="flex flex-col mt-10 max-w-full w-[525px]">
                <div className="flex flex-col items-start w-full max-md:max-w-full">
                  {metadata.map((item, index) => (
                    <div key={index} className="flex gap-5 justify-between mt-5 first:mt-0 max-w-full rounded-none">
                      <div className="font-semibold text-zinc-400">{item.label}</div>
                      <div className="font-medium dark:text-white">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
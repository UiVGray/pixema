import { IPost } from '@/types/types';

export function Article(props: IPost) {

  return (
    <article>
      <div className="mb-3">
        <time className="text-body-tertiary">{props.date}</time>
      </div>
      <h1 className="p-2">{props.title}</h1>
      <figure className="d-flex justify-content-center">
        <img src={props.image} className="img-fluid" alt="post image"></img>
      </figure>
      <p className="p-2 border-top">{props.text}</p>
      <div className="d-flex justify-content-between border-top post-footer"></div>
    </article>
  );
}

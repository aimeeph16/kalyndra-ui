import Image from "next/image";

export type TeamMember = {
  name: string;
  bio: string;
  email: string;
  photo: string;
  gradient: string;
};

export default function TeamCard({ name, bio, email, photo, gradient }: TeamMember) {
  return (
    <article className="flex flex-col">
      <div className="relative pt-56">
        <div className={`h-32 rounded-t-2xl bg-linear-to-r ${gradient}`} />
        <Image
          src={photo}
          alt={name}
          width={300}
          height={400}
          className="absolute bottom-0 left-1/2 h-[22rem] w-auto -translate-x-1/2 object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col bg-white px-8 pb-6 pt-10">
        <h3 className="mb-3 font-display text-2xl font-semibold">{name}</h3>
        <p className="text-justify">{bio}</p>

        <div className="mt-auto pt-10">
          <h4 className="mb-2 font-display font-semibold text-left">Contact Us</h4>
          <a href={`mailto:${email}`} className="flex items-center gap-3 hover:underline text-muted">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 fill-current">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
            </svg>
            {email}
          </a>
        </div>
      </div>
    </article>
  );
}
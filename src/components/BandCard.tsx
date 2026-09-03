import Image from "next/image";
import { Band } from "@/types/band";
import MemberList from "@/components/MemberList";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="band-card">
      <Image
        src={band.imageUrl}
        alt={band.name}
        width={900}
        height={600}
        sizes="(max-width: 720px) 100vw, 56vw"
      />
      <div className="band-content">
        <h2>{band.name}</h2>
        <div className="band-meta">
          <p>Genre: {band.genre}</p>
          <p>Formed Year: {band.formedYear}</p>
        </div>
        {band.description && <p>{band.description}</p>}

        <h3>Members</h3>
        <MemberList members={band.members} />
      </div>
    </article>
  );
}
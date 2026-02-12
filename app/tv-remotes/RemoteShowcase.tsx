import RemoteScene from "./RemoteScene";

type Props = {
  modelUrl: string;
};

export default function RemoteShowcase({ modelUrl }: Props) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="grid gap-16 lg:min-h-screen lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="space-y-12 lg:min-h-screen lg:py-12">
          <p className="text-xs uppercase tracking-[0.4em] text-mist">
            3D Showcase
          </p>
          <h2 className="font-display text-4xl uppercase tracking-[0.12em] text-foreground">
            Scroll to Rotate the Remote
          </h2>
          <p className="text-sm leading-7 text-mist">
            The model is rendered outside the card with smooth scroll-driven
            motion. Drop your GLB in public/models and it appears instantly.
          </p>
          <div className="glass-card rounded-2xl p-6 text-sm text-mist">
            Save the file as public/models/remote.glb or update the path.
          </div>
        </div>
        <div className="remote-stage lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]">
          <div className="remote-frame h-full">
            <RemoteScene modelUrl={modelUrl} className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

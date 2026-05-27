from pathlib import Path
p = Path("src/pages/about.tsx")
t = p.read_text("utf-8")
old = '''        </div>
      </section>

      <section className="mx-auto my-36 max-w-6xl px-6 sm:px-14 md:my-60 md:px-20">'''
new = '''        </div>
        <Transition appear show={selectedDetail !== None} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => setSelectedDetail(None)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-zinc-900/50 backdrop-blur-sm" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-3xl border border-accent/20 bg-background p-6 text-left align-middle shadow-2xl transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Dialog.Title className="text-2xl font-semibold text-foreground">{activeDetail?.title}</Dialog.Title>
                        <p className="mt-2 text-sm text-muted-foreground">{activeDetail?.summary}</p>
                      </div>
                      <button
                        type="button"
                        className="rounded-full border border-border bg-background px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-accent/5"
                        onClick={() => setSelectedDetail(None)}
                      >
                        Close
                      </button>
                    </div>
                    <div className="mt-6 space-y-5">
                      <p className="text-sm leading-7 text-muted-foreground">{activeDetail?.description}</p>
                      <div className="grid gap-3 sm:grid-cols-3">
                        <a
                          href={activeDetail?.demoHref}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-2xl border border-accent/20 bg-accent/10 px-4 py-3 text-center text-sm font-semibold text-accent transition hover:bg-accent/15"
                        >
                          Live Demo
                        </a>
                        <a
                          href={activeDetail?.githubHref}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-2xl border border-accent/20 bg-foreground/5 px-4 py-3 text-center text-sm font-semibold text-foreground transition hover:bg-foreground/10 dark:bg-zinc-900"
                        >
                          GitHub Repo
                        </a>
                        <a
                          href={activeDetail?.docHref}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-2xl border border-accent/20 bg-foreground/5 px-4 py-3 text-center text-sm font-semibold text-foreground transition hover:bg-foreground/10 dark:bg-zinc-900"
                        >
                          Documentation
                        </a>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </section>

      <section className="mx-auto my-36 max-w-6xl px-6 sm:px-14 md:my-60 md:px-20">'''
t = t.replace(old, new)
p.write_text(t, "utf-8")

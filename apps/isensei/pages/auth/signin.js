import LoginButton from "@/components/login-button/Button";
import PageTitle from "@/components/PageTitle";
import { getProviders, getSession } from "next-auth/react";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

export default function SignIn({ providers }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  console.log("Providers", { providers });
  useEffect(() => {
    if (router.query.error) {
      setIsOpen(true);
    }
  }, [router]);
  return (
    <>
      <div className="space-y-2 pt-6 pb-4 md:space-y-5">
        <PageTitle>Sign In</PageTitle>
      </div>
      <div className="flex flex-col items-center justify-items-center space-y-2 xl:space-y-0">
        <div className="prose max-w-none p-8 dark:prose-dark">
          <div className="flex flex-col items-center justify-between gap-4">
            <p className=" text-center sm:text-left">
              Sign in with one of these providers:
            </p>
            {/* {Object.values(providers)?.map((provider) => {
              return <LoginButton key={provider.id} provider={provider} />;
            })} */}
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Problem signing in
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    An unexpected problem occurred while I&apos;m trying to log
                    you in. Please try with another providers.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="text-success-900 bg-success-100 hover:bg-success-200 focus-visible:ring-success-500 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    onClick={() => setIsOpen(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

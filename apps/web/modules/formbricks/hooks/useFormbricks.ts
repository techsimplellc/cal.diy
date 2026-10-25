import formbricks from "@formbricks/js";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

import useMeQuery from "@calcom/trpc/react/hooks/useMeQuery";

// User identification (setUserId / setAttributes) is a Formbricks Enterprise
// feature: without a license the self-hosted server rejects it with 403, so
// surveys run anonymously for signed-in users.
export const initFormbricks = async (): Promise<void> => {
  if (process.env.NEXT_PUBLIC_FORMBRICKS_HOST_URL && process.env.NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID) {
    await formbricks.setup({
      environmentId: process.env.NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID,
      appUrl: process.env.NEXT_PUBLIC_FORMBRICKS_HOST_URL,
    });
  }
};

export const useFormbricks = (): void => {
  const { data: user, isLoading } = useMeQuery();
  const { data: session } = useSession();

  useEffect(() => {
    if (!isLoading && user && session) {
      initFormbricks();
    }
  }, [isLoading, user, session]);
};

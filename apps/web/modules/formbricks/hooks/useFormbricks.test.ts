import formbricks from "@formbricks/js";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { initFormbricks } from "./useFormbricks";

vi.mock("@formbricks/js", () => ({
  default: {
    setup: vi.fn(),
    setUserId: vi.fn(),
    setAttributes: vi.fn(),
  },
}));

vi.mock("next-auth/react", () => ({ useSession: vi.fn() }));
vi.mock("@calcom/trpc/react/hooks/useMeQuery", () => ({ default: vi.fn() }));

describe("initFormbricks", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("sets up Formbricks without identifying the user", async () => {
    vi.stubEnv("NEXT_PUBLIC_FORMBRICKS_HOST_URL", "https://forms.example.com");
    vi.stubEnv("NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID", "env123");

    await initFormbricks();

    expect(formbricks.setup).toHaveBeenCalledWith({
      environmentId: "env123",
      appUrl: "https://forms.example.com",
    });
    expect(formbricks.setUserId).not.toHaveBeenCalled();
    expect(formbricks.setAttributes).not.toHaveBeenCalled();
  });

  it("does nothing when Formbricks is not configured", async () => {
    vi.stubEnv("NEXT_PUBLIC_FORMBRICKS_HOST_URL", "");
    vi.stubEnv("NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID", "");

    await initFormbricks();

    expect(formbricks.setup).not.toHaveBeenCalled();
  });
});

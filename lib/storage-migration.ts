/**
 * VitaStellar localStorage migration utility.
 *
 * Migrates data from old "uzima-*" / "uzima:*" keys to new "vitastellar-*" / "vitastellar:*" keys.
 * Runs once on app initialization so existing users don't lose their preferences,
 * bookmarks, PWA state, offline queues, etc. after the rebranding.
 *
 * Safe to call on every page load — each key is only migrated if the new key doesn't already exist.
 */

const MIGRATION_KEY = 'vitastellar:storage-migrated';

interface KeyMapping {
  old: string;
  new: string;
}

const MAPPINGS: KeyMapping[] = [
  { old: 'uzima-lang', new: 'vitastellar-lang' },
  { old: 'uzima-update-dismissed', new: 'vitastellar-update-dismissed' },
  { old: 'uzima_task_draft', new: 'vitastellar_task_draft' },
  { old: 'uzima-last-sync', new: 'vitastellar-last-sync' },
  { old: 'uzima:bookmarked-tasks', new: 'vitastellar:bookmarked-tasks' },
  { old: 'uzima-pwa-visits', new: 'vitastellar-pwa-visits' },
  { old: 'uzima-pwa-dismissed-until', new: 'vitastellar-pwa-dismissed-until' },
  { old: 'uzima-pwa-has-interacted', new: 'vitastellar-pwa-has-interacted' },
];

/**
 * Migrate a single localStorage key from old → new if the old key exists
 * and the new key doesn't already have a value.
 */
function migrateKey(oldKey: string, newKey: string): void {
  try {
    if (localStorage.getItem(newKey) !== null) return; // already migrated or fresh value exists
    const value = localStorage.getItem(oldKey);
    if (value !== null) {
      localStorage.setItem(newKey, value);
    }
  } catch {
    // Storage quota exceeded or unavailable — fail silently
  }
}

/**
 * Run all localStorage migrations once. Idempotent — sets a flag after
 * the first successful run so migrations never repeat.
 */
export function runStorageMigration(): void {
  if (typeof window === 'undefined') return;

  try {
    if (localStorage.getItem(MIGRATION_KEY) === 'v1') return;

    for (const { old, new: newKey } of MAPPINGS) {
      migrateKey(old, newKey);
    }

    localStorage.setItem(MIGRATION_KEY, 'v1');
  } catch {
    // If storage is unavailable, skip entirely
  }
}

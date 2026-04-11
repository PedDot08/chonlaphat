import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default async function DiscordStatus() {
  const res = await fetch(
    `https://api.lanyard.rest/v1/users/${process.env.DISCORD_USER_ID}`,
    { next: { revalidate: 30 } }
  );

  const json = await res.json();
  if (!json.success || !json.data) return null;

  const d = json.data;
  const status   = d.discord_status;
  const user     = d.discord_user;
  const activities = d.activities ?? [];
  const game = activities.find((a: any) => a.type === 0);

  const avatarUrl = user.avatar
    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
    : null;

  const statusColors: Record<string, string> = {
    online:  "bg-green-500 text-green-500",
    idle:    "bg-yellow-400 text-yello-400",
    dnd:     "bg-red-500 text-red-500",
    offline: "bg-gray-400 text-gray-400",
  };

  const statusDot = statusColors[status] ?? "bg-gray-400";

  const statusLabels: Record<string, string> = {
    online:  "Online",
    idle:    "Idle",
    dnd:     "Do Not Disturb",
    offline: "Offline",
  };

  const formatElapsed = (startMs: number) => {
    const diff = Math.floor((Date.now() - startMs) / 1000);
    const h = Math.floor(diff / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;
    if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")} elapsed`;
    return `${m}:${String(s).padStart(2, "0")} elapsed`;
  };

  return (
    <div className="xl:max-w-[400px] rounded-2xl overflow-hidden border-1 border-zinc-100 shadow-[0px_1px_12px_rgba(0,0,0,0.06)] bg-gray-700 mt-5">

      {/* Avatar */}
      <div className="px-5 pb-5">
        <div className="flex gap-3 items-center p-1">
          <div className="flex items-end justify-between mt-4 mb-3">
            <div className="relative">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  width={72}
                  height={72}
                  alt="avatar"
                  className="rounded-xl border-2 border-zinc-900"
                />
              ) : (
                <div className="w-18 h-18 rounded-full border-4 border-white dark:border-zinc-900 bg-indigo-500 flex items-center justify-center text-black text-2xl font-medium">
                  {user.username[0].toUpperCase()}
                </div>
              )}
              {/* Status dot */}
              <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white dark:border-zinc-900 ${statusDot}`} />
            </div>
          </div>

          {/* Name + status */}
          <div className="flex-col items-center mt-1">
            <h1 className="text-white text-lg font-bold">{user.display_name}</h1>
            <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              @{user.username}
            </h2>
            <p className="text-[10px] items-center text-zinc-500 dark:text-zinc-400 border bg-gray-600 border-gray-500 px-2 py-1 w-full rounded-full">
              <FontAwesomeIcon icon={faCircle} className={`text-[6px] rounded-full px-[2px] py-[3px] ${statusColors[status]}`} /> {statusLabels[status] ?? "Offline"}
            </p>
          </div>
        </div>

        {/* Game */}
        {game && (
          <div className="rounded-xl bg-zinc-50 dark:bg-zinc-800 p-3 flex gap-3 items-center mb-3">
            <div className="w-12 h-12 rounded-md bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-2xl flex-shrink-0">
              🎮
            </div>
            <div className="min-w-0">
              <p className="text-xs text-zinc-400 mb-0.5">Playing a game</p>
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                {game.name}
              </p>
              {game.details && (
                <p className="text-xs text-zinc-500 truncate">{game.details}</p>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
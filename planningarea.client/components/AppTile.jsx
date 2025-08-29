// components/AppTile.jsx
export default function AppTile({ name, icon, onClick, colorCode}) {
    return (
        <div
            onClick={onClick}
            className={`app-tile flex flex-col items-center justify-center p-4 rounded cursor-pointer w-24 ${colorCode}`}
        >
            <img src={icon} alt={name} className="w-12 h-12" />
            <span className="text-sm mt-2">{name}</span>
        </div>
    );
}

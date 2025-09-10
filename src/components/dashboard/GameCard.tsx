import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Zap, Play, Trophy } from "lucide-react";

interface Game {
  id: number;
  name: string;
  description: string;
  category: string;
  xpReward: number;
  difficulty: string;
  playCount: number;
  bestScore: number;
  completed: boolean;
}

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const handlePlayGame = () => {
    // Here you would implement the actual game logic
    console.log(`Playing game: ${game.name}`);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="h-5 w-5 text-primary" />
            <div>
              <CardTitle className="text-lg">{game.name}</CardTitle>
              <CardDescription>{game.description}</CardDescription>
            </div>
          </div>
          {game.completed && (
            <Trophy className="h-5 w-5 text-accent" />
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant={game.difficulty === "Easy" ? "secondary" : game.difficulty === "Medium" ? "default" : "destructive"}>
            {game.difficulty}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {game.category}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="flex items-center justify-center space-x-1">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{game.xpReward}</span>
            </div>
            <p className="text-xs text-muted-foreground">XP Reward</p>
          </div>
          <div>
            <div className="flex items-center justify-center space-x-1">
              <Play className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{game.playCount}</span>
            </div>
            <p className="text-xs text-muted-foreground">Times Played</p>
          </div>
        </div>

        {game.bestScore > 0 && (
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Best Score</p>
            <p className="text-lg font-bold text-primary">{game.bestScore}</p>
          </div>
        )}

        <Button 
          className="w-full" 
          onClick={handlePlayGame}
          variant={game.completed ? "outline" : "default"}
        >
          <Play className="mr-2 h-4 w-4" />
          {game.completed ? "Play Again" : "Play Game"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default GameCard;
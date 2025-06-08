// Import the Rating component to display skill ratings as stars
import Rating from "@/components/skills/rating";

// Import the type definition for skills data structure
import { skillsInterface } from "@/config/skills";

// Define the props type for the SkillsCard component
// It expects an array of skills, each following the skillsInterface structure
interface SkillsCardProps {
  skills: skillsInterface[];
}

// Functional React component to render a card layout of skills
export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    // Container div with grid layout and responsive columns
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* Map over the skills array to create individual skill cards */}
      {skills.map((skill, id) => (
        <div
          key={id} // Unique key for each element in the list
          className="relative overflow-hidden rounded-lg border bg-background p-2"
        >
          <div className="flex h-[230px] flex-col justify-between rounded-md p-6 sm:h-[230px]">
            {/* Render the skill icon with size 50 */}
            <skill.icon size={50} />
            <div className="space-y-2">
              {/* Skill name displayed as a bold heading */}
              <h3 className="font-bold">{skill.name}</h3>
              {/* Skill description with smaller, muted text */}
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
              {/* Render the Rating component with the skill's rating */}
              <Rating stars={skill.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

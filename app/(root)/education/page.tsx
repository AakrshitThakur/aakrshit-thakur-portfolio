import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/educaion/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EducationArr } from "@/config/education";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.education.metadata.title,
  description: pagesConfig.education.metadata.description,
};

const renderContent = (tabVal: string) => {
  let expArr = EducationArr;
  if (tabVal === "Colleges") {
    expArr = expArr.filter((val) => val.type === "Colleges");
  } else if (tabVal === "Schools") {
    expArr = expArr.filter((val) => val.type === "Schools");
  } else if (tabVal === "Certificates") {
    expArr = expArr.filter((val) => val.type === "Certificates");
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {expArr.map((exp) => (
        <ProjectCard project={exp} key={exp.id} />
      ))}
    </div>
  );
};

export default function ExperiencePage() {
  return (
    <PageContainer
      title={pagesConfig.education.title}
      description={pagesConfig.education.description}
    >
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="conatiner grid max-w-[30rem] grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="Colleges">Colleges</TabsTrigger>
          <TabsTrigger value="Schools">Schools</TabsTrigger>
          <TabsTrigger value="Certificates">Certificates</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="w-full">
          {renderContent("all")}
        </TabsContent>
        <TabsContent value="Colleges">{renderContent("Colleges")}</TabsContent>
        <TabsContent value="Schools">{renderContent("Schools")}</TabsContent>
        <TabsContent value="Certificates">
          {renderContent("Certificates")}
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}

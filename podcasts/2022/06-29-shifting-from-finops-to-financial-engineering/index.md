---
authors: [lars, dvir]
tags: [interview, cloud, finops, finance, analytics, gcp, aws]
image: ./img/banner-social.jpg
---

# Episode 5: Shifting from FinOps to Financial Engineering

[**Dvir Mizrahi**](https://linkedin.com/in/dvir-mizrahi) is Head of Financial Engineering at [Wix](https://wix.com), _the_ leader in website creation with 220 million users running e-commerce operations. And with over six thousand employees, [Wix](https://wix.com) ships more than fifty thousand builds each day.

[Dvir](https://linkedin.com/in/dvir-mizrahi) is also among the original authors of the [AWS Cloud Financial Management](https://aws.amazon.com/blogs/training-and-certification/tag/aws-cloud-financial-management) certification.

In this episode, [Dvir](https://linkedin.com/in/dvir-mizrahi) covers how [Wix](https://wix.com) shifted from FinOps to Financial Engineering. It's an engineering-first approach to build tooling and processes tracking financial key performance indicators (KPIs) for its multi-cloud infrastructure. The new approach established a culture of financial responsibility that supports Wix's continued growth.

[Wix](https://wix.com) started in 2006 and initially ran its infrastructure on-premise. Today, [Wix](https://wix.com) runs a multi-cloud environment on [Google Cloud Platform (GCP)](https://cloud.google.com) and [Amazon Web Services (AWS)](https://aws.amazon.com). As [Wix](https://wix.com) shifted from on-premise to the cloud, the procurement process of resources changed with it.

In the old world, purchasing additional hardware was a closed and controlled process. But in the cloud, [Dvir](https://linkedin.com/in/dvir-mizrahi) compares resource procurement to "a supermarket where people can go in, take whatever they want, and leave without passing the registers." A developer could spin up a hundred thousand instances with just the click of a button.

[Wix](https://wix.com) realized the financial risk that comes with liberal permissions to spin up infrastructure and hired [Dvir](https://linkedin.com/in/dvir-mizrahi) in 2017. FinOps approaches infrastructure governance from a billing perspective and handles workloads already provisioned in the cloud. But at [Wix](https://wix.com)'s scale, where there are thousands of engineers, the FinOps approach stops working. "By the time you have a financial incident, it's too late and you didn't govern anything."

[Dvir](https://linkedin.com/in/dvir-mizrahi) shifted the strategy to proactively preventing waste in the first place, by incorporating financial <abbr title="key performance indicator">KPI</abbr>s into engineering goals. In addition, [Dvir](https://linkedin.com/in/dvir-mizrahi) built an internal platform called "InfraGod" which collects infrastructure data, integrates with [Terraform](https://terraform.io), and enforces rules at the time of resource provisioning. Taking action at the time resources are provisioned rather than after the fact is "the difference between Finance and Financial Engineering."

Listen to this episode for a deep dive into the tactics that [Dvir](https://linkedin.com/in/dvir-mizrahi) uses to run Financial Engineering at [Wix](https://wix.com), such as data collection, engineering post-mortems, monthly reports, and mandatory resource tagging.

https://youtu.be/TZmbJDKPWXg

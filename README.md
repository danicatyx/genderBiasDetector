# revisionBias Detector
* UC Berkeley AI Hackathon MVP 

# About Us

The ReVision Project presents an AI copilot tool for STEM textbook authors, capable of detecting and mitigating biases in textbooks to create inclusive educational content. Current initiatives create supplementary resources which are of extra cost and time. However, our solution streamlines textbook development, while also promoting classroom equity and fostering engagement.
Incorporating supply chain diversity will have a significant impact in the following ways. First, it allows for enhanced Innovation as these individuals bring unique perspectives and innovative solutions that can enrich the development and functionality of our AI copilot tool. Secondly, we achieve strengthened community support. By supporting and empowering diverse suppliers, we contribute to building stronger and more resilient communities, which aligns with our mission of promoting diversity and inclusion in STEM education. 

# Inspiration
Incorporating supply chain diversity will have a significant impact in the following ways. First, it allows for enhanced Innovation as these individuals bring unique perspectives and innovative solutions that can enrich the development and functionality of our AI copilot tool. Secondly, we achieve strengthened community support. By supporting and empowering diverse suppliers, we contribute to building stronger and more resilient communities, which aligns with our mission of promoting diversity and inclusion in STEM education and the future of work.

# Problem we want to solve
One study published in the Journal of Chemical Education examined 10 U.S college level general chemistry textbooks (2016-2020) and showed that male names appear on average “every 4 pages of text” while a woman’s name “appears every 250 pages of text”. Moreover, women only constituted “3% of the named science, technology, engineering, math and medical professionals” noted in the textbook. Another similar study published in the Royal Society Publishing Journal showed how “145 women scientists were mentioned, compared with 962 male scientists” across 7 introductory biology textbooks.

# What it does
The ReVision Project presents an AI copilot tool for STEM textbook authors, capable of detecting and mitigating biases in textbooks to create inclusive educational content. Current initiatives create supplementary resources which are of extra cost and time. However, our solution streamlines textbook development, promoting classroom equity and fostering engagement. We are willing to expand this to more than just gender inclusivity but more anti-bias in all components, including race, gender, socioeconomic status, etc

# How we built it
We built the project using React.js with a Python and Flask backend. We called existing general bias, gender bias, and racial bias APIs from Hugging Face due to time constraints. As we continue working on this project, we hope to integrate our own machine learning model to detect biases for disability, geographical, and other metrics.

# Challenges we ran into
It was very difficult to integrate additional APIs with our existing backend structure. We were trying to integrate APIs that needed a local file, and APIs that couldn't be called through react, and spent lots of time finding workarounds.

# Accomplishments that we're proud of
We're proud of our ability to find a very specific problem with a huge pain point for the customer. Currently, textbook companies have a writing and then revising process to address equity concerns. This is a lengthy and highly manual task that takes 6 months to a year based on the committee size. Our tool would save time for writers, editors, and publishers while addressing the problem of workplace inclusion from the start. We are able to talk to lots of people about this idea through this hackathon as well, and the idea is well received. We hope to continue improving our MVP to demonstrate to customers in our launch this fall.

# What we learned
We learned that it's sometimes easier to rely on existing open source code and tools for creating a fast prototype. We were ambitious in the beginning about the features we wanted to implement, but given the time constraint, we learned that we need to prioritize only the major features first.

# What's next for ReVision
Making it to more seamless experience by integrating UI
Research on metrics that make sense regarding which bias is the biggest problem in current textbooks and how to assess it.
Consideration of leveraging Hume.ai to embed empathic metrics in texts
Utilizing Hume.ai to train teachers on voice interactions for inclusive classrooms
When making a fix recommendation for bias, consider the supporting rationale for it (reference)

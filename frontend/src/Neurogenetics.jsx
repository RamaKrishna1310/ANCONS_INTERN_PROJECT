import homepic from './assests/home-pic.jpg'
export default function Neurogenetics() {
    return (
        <div className='p-20'>
            <div className='w-full flex flex-wrap flex-col lg:flex-row text-center items-center mt-56'>
                <img src={homepic} alt="" className='w-full max-w-[50%] min-w-72' />
                <div className='w-full max-w-[50%] min-w-72'>
                    <h1 className="text-4xl font-light text-gray-800 text-left ml-10">Total Tuition Fees - $2000</h1>
                    <h1 className="text-4xl font-light text-gray-800 text-left ml-10 pt-4">Internship Placement Fee - $500</h1>
                    <p className='text-[30px] text-gray-600 text-left p-10 pt-0'>The Learning Management System of the California Institute of Genetics is a dedicated online platform for delivering Graduate Diploma in Medical Genetics program. In-house curriculum experts have designed the courses for flexible and asynchronous learning allowing students to access comprehensive course materials </p>
                    <button className="p-5 rounded-full font-semibold text-blue-800 border-solid border-2 border-blue-800 shadow-md
                    hover:bg-blue-800 hover:text-white">REGISTER</button>
                </div>
            </div>

            <h1 className='font-extrabold text-[30px] text-center text-blue-800'>3 MONTHS ONLINE TRAINING ON NEUROGENETICS</h1>
            <div className='flex w-full'>
                <div className='w-1/2'>
                    <h3 className='text-[25px] text-black'>3 month Online Training in Neurogenetics</h3>
                    <ol className='text-[25px] text-gray-500'>
                        <li>Foundations of Neurogenetics</li>
                        <ul><span>Topics Covered:</span>
                            <li>Basics of genetics and molecular biology</li>
                            <li>Fundamentals of neurobiology and neuroscience</li>
                            <li>Introduction to neurogenetics: genetic mutations, inheritance patterns, and genetic diversity in neurological conditions</li>
                            <li>Overview of neurogenetic disorders, with case studies in Alzheimer’s, Huntington’s, and Parkinson’s Diseases</li>
                        </ul>
                    </ol>
                    <ol className='text-[25px] text-gray-500'>
                        <li>Genetics of Parkinson’s Disease</li>
                        <ul><span>Topics Covered:</span>
                            <li>Genetic risk factors and known mutations in Parkinson’s Disease (e.g., LRRK2, SNCA, GBA)</li>
                            <li>Mitochondrial dysfunction and oxidative stress in neurodegeneration</li>
                            <li>The role of genetic testing in Parkinson’s Disease research and diagnosis</li>
                            <li>Ethical considerations in genetic testing for Parkinson’s Disease</li>
                        </ul>
                    </ol>
                    <ol className='text-[25px] text-gray-500'>
                        <li> Research Methods in Neurogenetics</li>
                        <ul><span>Topics Covered:</span>
                            <li>Laboratory techniques in genetic research: PCR, DNA sequencing, CRISPR gene editing</li>
                            <li>Bioinformatics tools for neurogenetic research: genomic databases, sequence alignment, and variant analysis</li>
                            <li>Data interpretation and critical analysis of genetic research papers</li>
                            <li>Workshop: Designing a genetic study for neurogenetic research</li>
                        </ul>
                    </ol>
                </div>
                <div className='w-1/2'>
                    <h3 className='text-[25px] text-black'>Training for the Parkinson Research Project</h3>
                    <form action="">
                        <table>
                            <tr><input type='text' className='border-solid border-2 border-blue-800 shadow-md' required placeholder='Name*' /></tr>
                            <tr><input type='text' className='border-solid border-2 border-blue-800 shadow-md' required placeholder='Phone*' /></tr>
                            <tr><input type='text' className='border-solid border-2 border-blue-800 shadow-md' required placeholder='Email*' /></tr>
                            <tr><input type='text' className='border-solid border-2 border-blue-800 shadow-md' required placeholder='Qualification*' /></tr>
                            <tr><input type='text' className='border-solid border-2 border-blue-800 shadow-md' required placeholder='Instituition Name*' /></tr>
                            <tr><input type='text' className='border-solid border-2 border-blue-800 shadow-md' required placeholder='GPA*' /></tr>
                            <tr><input type='text' className='border-solid border-2 border-blue-800 shadow-md' required placeholder='Year Of Passing*' /></tr>
                            <tr><input type='text' className='border-solid border-2 border-blue-800 shadow-md' required placeholder='Location*' /></tr>
                            <tr><input type='text' className='border-solid border-2 border-blue-800 shadow-md' required placeholder='Country*' /></tr>
                            <tr><input type='text' className='border-solid border-2 border-blue-800 shadow-md' required placeholder='Work Experience*' /></tr>
                            <tr><input type='text' className='border-solid border-2 border-blue-800 shadow-md' required placeholder='Name of Referral or any Recruiter if any*' /></tr>
                            <tr><input type='text' className='border-solid border-2 border-blue-800 shadow-md' required placeholder='Email of Refferal or Recruiter*' /></tr>
                            <tr>Attach Academic Transcript <input type="file" /></tr>
                            <tr><input type="submit" value="SUBMIT APPLICATION" /></tr>
                            <tr>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</tr>
                        </table>
                    </form>
                </div>
            </div>

            <div className='w-full flex flex-wrap flex-col lg:flex-row text-center items-center p-20'>
                <img src={homepic} alt="" className='w-full max-w-[50%] min-w-72' />
                <div className='w-full max-w-[50%] min-w-72'>
                    <h1 className="text-4xl font-light text-gray-800 text-left p-10">Certificate in Neurogenetics</h1>
                    <p className='text-[30px] text-gray-600 text-left p-10 pt-0'>Neurogenetics is crucial in understanding Parkinson's Disease (PD) because genetics plays a significant role in the onset, progression, and variability of the disease. Research in neurogenetics provides insights into both inherited and sporadic forms of PD, helping to unravel the complex interactions between genes. </p>
                    <button className="p-5 rounded-full font-semibold text-blue-800 border-solid border-2 border-blue-800 shadow-md
                                 hover:bg-blue-800 hover:text-white">PAY REGISTRATION FEE</button>
                </div>
            </div>

        </div>
    );
}
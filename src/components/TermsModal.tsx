"use client";


type Props = {
  open: boolean;
  onClose: () => void;
};

export default function TermsModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#161E24] opacity-60"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-[770px] max-h-[63vh] bg-white text-[#34393E] py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-12 rounded-lg text-left flex flex-col">
        {/* Title */}
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold mb-4 md:mb-6 text-[#34393E] leading-[120%] tracking-[-3%]">
          DDA School of Research – Terms of Service
        </h2>

        {/* Content */}
        <div className="relative flex-1 overflow-y-auto pr-1 space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg leading-[120%] tracking-[-3%] pb-6">
          <div>
            <p className="font-bold">Last Updated: 19 December 2025</p>
            <p>
              These Terms of Service ("Terms") govern your use of the educational programs, content,
              and community platforms (the "Services") offered by DDA School of Research, operated
              by DODO Design Ltd ("we," "us," "our," or the "School").
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">1. Acceptance of Terms</h3>
            <p>
              By enrolling in, accessing, or using any Services offered by the School, you ("Participant")
              agree to be bound by these Terms, forming a legally binding contract. If you do not
              agree, you may not use the Services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">2. Account Registration</h3>
            <p>
              You need an account to access most Services. You must provide accurate information
              and are solely responsible for all activity under your account. You must be at least 18
              years of age to create an account. You may not share your login credentials or transfer
              your account. You must notify us immediately at hello@dododesign.africa of any
              unauthorized use.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">3. Services, Access, and Payment</h3>
            <div className="space-y-2">
              <p>
                <span className="font-bold">3.1 Description:</span> The School provides non-degree research education programs, including
                pre-recorded materials, live sessions, and community access, as described at the time of
                enrollment. The School does not guarantee specific research outcomes, publication, or
                career advancement.
              </p>
              <p>
                <span className="font-bold">3.2 Payment:</span> Full payment of the advertised fee is required before access to any Services
                is granted.
              </p>
              <p>
                <span className="font-bold">3.3 License Grant:</span> Upon payment, the School grants you a limited, non-exclusive, non-
                transferable, revocable license to access and view the enrolled program's content for
                your personal, non-commercial, educational use only.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">4. Refund and Cancellation Policy</h3>
            <div className="space-y-2">
              <p>
                <span className="font-bold">4.1 General Policy:</span> Due to the immediate provision of digital content, all fees are non-
                refundable once payment is made.
              </p>
              <p>
                <span className="font-bold">4.2 Program Changes by School:</span> The School reserves the right to modify content,
                schedules, or instructors. If the School cancels a program before its commencement, you
                will be offered a transfer to a future session or a full refund.
              </p>
              <p>
                <span className="font-bold">4.4 No-Shows & Dismissal:</span> No refunds will be provided for voluntary withdrawal after
                access has been granted whether you fail to attend, or dismissed for violation of these
                Terms (see Section 6).
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">5. Intellectual Property</h3>
            <div className="space-y-2">
              <p>
                <span className="font-bold">5.1 School's IP:</span> All original course materials (videos, texts, methods, software) are the
                exclusive intellectual property of DODO Design Ltd. You may not reproduce, redistribute,
                or create derivative works.
              </p>
              <p>
                <span className="font-bold">5.2 Participant's Pre-existing IP:</span> Any intellectual property you own prior to enrollment
                remains yours.
              </p>
              <p>
                <span className="font-bold">5.3 Research Output IP ("Foreground IP"):</span>
              </p>
              <p className="pl-4">
                <span className="font-bold">5.3.1 Ownership:</span> Subject to the license below, intellectual property created
                independently by you during the program is owned by you.
              </p>
              <p className="pl-4">
                <span className="font-bold">5.3.2 License to School:</span> By submitting any work, project, or research output (collectively,
                "Research Output") to the School, you grant DODO Design Ltd a perpetual, worldwide,
                non-exclusive, royalty-free license to use, display, reproduce, and modify the Research
                Output for the School's educational, promotional, and internal research purposes.
              </p>
              <p className="pl-4">
                <span className="font-bold">5.3.3 Plagiarism:</span> You warrant that your submitted work is original and does not infringe
                third-party rights. You agree to indemnify the School against any infringement claims
                arising from your work.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">6. Participant Conduct and Termination</h3>
            <div className="space-y-2">
              <p>
                <span className="font-bold">6.1 Code of Conduct:</span> You agree to use the Services lawfully and respectfully. You may
                not harass others, misuse community platforms, or engage in data scraping.
              </p>
              <p>
                <span className="font-bold">6.2 Academic Integrity:</span> Plagiarism, fabrication of data, or any form of academic
                dishonesty is strictly prohibited.
              </p>
              <p>
                <span className="font-bold">6.3 Termination by School:</span> We reserve the right to terminate your access and enrollment,
                without refund, for material breaches of these Terms, including violations of the Code of
                Conduct or Academic Integrity policy.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">7. Disclaimers and Limitation of Liability</h3>
            <div className="space-y-2">
              <p>
                <span className="font-bold">7.1 Disclaimers:</span> THE SERVICES AND ALL INCLUDED CONTENT ARE PROVIDED ON AN "AS IS"
                AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND. THE SCHOOL DISCLAIMS
                ALL WARRANTIES, INCLUDING OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT. WE DO NOT GUARANTEE UNINTERRUPTED ACCESS TO THE
                SERVICES.
              </p>
              <p>
                <span className="font-bold">7.2 Limitation of Liability:</span> TO THE FULLEST EXTENT PERMITTED BY LAW, THE SCHOOL'S TOTAL
                LIABILITY TO YOU FOR ANY CLAIM ARISING FROM THESE TERMS OR THE SERVICES IS LIMITED
                TO THE AMOUNT OF FEES YOU HAVE PAID TO THE SCHOOL IN THE TWELVE (12) MONTHS
                PRECEDING THE EVENT GIVING RISE TO THE CLAIM. THE SCHOOL SHALL NOT BE LIABLE FOR
                ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">8. Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold harmless DODO Design Ltd, its affiliates,
              officers, and employees from any claims, losses, or expenses (including legal fees) arising
              from your use of the Services, your breach of these Terms, or your infringement of any
              third-party rights.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">9. Governing Law and Dispute Resolution</h3>
            <div className="space-y-2">
              <p>
                <span className="font-bold">9.1 Governing Law:</span> These Terms are governed by the laws of the Federal Republic of
                Nigeria, without regard to conflict of law principles.
              </p>
              <p>
                <span className="font-bold">9.2 Mandatory Informal Resolution:</span> Before initiating any formal proceeding, you agree to
                contact us at hello@dododesign.africa with a written description of the dispute and a
                proposed resolution. Both parties agree to negotiate in good faith for 60 days.
              </p>
              <p>
                <span className="font-bold">9.3 Formal Resolution:</span> If the dispute is not resolved informally, you agree that any legal
                action shall be brought exclusively in the competent courts located in Lagos State,
                Nigeria. You waive the right to participate in a class action.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">10. General Terms</h3>
            <div className="space-y-2">
              <p>
                <span className="font-bold">10.1 Updates:</span> We may modify these Terms. Continued use after changes constitutes
                acceptance.
              </p>
              <p>
                <span className="font-bold">10.2 Severability:</span> If any provision is found invalid, the remainder of the Terms remains in
                effect.
              </p>
              <p>
                <span className="font-bold">10.3 Entire Agreement:</span> These Terms constitute the entire agreement between you and
                the School regarding the Services.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">11. Contact Information</h3>
            <p>
              For questions about these Terms, please contact us at:<br />
              DDA School of Research (DODO Design Ltd)<br />
              Email: hello@dododesign.africa
            </p>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-2 pt-1">
          <button
            onClick={onClose}
            className="bg-[#F1B130] hover:bg-yellow-500 text-[#34393E] font-semibold px-4 py-4 cursor-pointer rounded-md transition-colors w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

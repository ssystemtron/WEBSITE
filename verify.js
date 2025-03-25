const SUPABASE_URL = "https://ykcoctbpfhunyovpjqsu.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrY29jdGJwZmh1bnlvdnBqcXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MTYwMTIsImV4cCI6MjA1ODQ5MjAxMn0.qLCraWxi8gCwg6w-8mYShXd2c6AW2HSaVBjuDYV9ETc";

async function verifyCertificate() {
    let certId = document.getElementById("certificateId").value.trim();
    let resultDiv = document.getElementById("result");

    const { createClient } = window.supabase;
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    let { data, error } = await supabase
        .from('certificates')
        .select('student_name')
        .eq('certificate_id', certId)
        .single();

    if (error || !data) {
        resultDiv.style.color = "red";
        resultDiv.innerHTML = "❌ Invalid Certificate ID.";
    } else {
        resultDiv.style.color = "green";
        resultDiv.innerHTML = ✅ Valid Certificate: Issued to <b>${data.student_name}</b>;
    }
}